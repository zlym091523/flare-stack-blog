<script>
import { onDestroy, onMount } from "svelte";
import { pioConfig } from "@/config";

const pioOptions = {
    mode: pioConfig.mode,
    hidden: pioConfig.hiddenOnMobile,
    content: pioConfig.dialog || {},
    model: pioConfig.models || ["/pio/models/pio/model.json"],
};

// 从 config 获取 SDK 版本，如果没有则自动判断
const sdkVersion = pioConfig.sdkVersion || (pioOptions.model[0].includes("model3.json") ? 4 : 2);
const isModel3 = sdkVersion >= 3;

let pioContainer;
let pioCanvas;
let pioInitialized = false;

// 初始化函数
function initPio() {
    if (typeof window !== "undefined" && typeof Paul_Pio !== "undefined") {
        try {
            if (pioContainer && pioCanvas && !pioInitialized) {
                // 如果是 SDK4，手动初始化 Pixi 环境
                if (isModel3 && typeof window.initPioPixi === "function") {
                    window.initPioPixi(pioConfig.position || 'left');
                }

                // 实例化 Paul_Pio
                new Paul_Pio(pioOptions);
                pioInitialized = true;
                console.log(`Pio initialized successfully (SDK${sdkVersion})`);
            }
        } catch (e) {
            console.error("Pio initialization error:", e);
        }
    } else {
        setTimeout(initPio, 100);
    }
}

// 核心：资源加载器
async function loadPioAssets() {
    if (typeof window === "undefined") return;

    const loadScript = (src, id) => {
        return new Promise((resolve, reject) => {
            // 检查是否已存在（避免 Swup 重复加载）
            const existing = document.querySelector(`script[src="${src}"]`);
            if (existing || document.querySelector(`#${id}`)) {
                console.log(`[Pio] Script already loaded: ${src}`);
                resolve();
                return;
            }
            const script = document.createElement("script");
            script.id = id;
            script.src = src;
            script.onload = () => {
                console.log(`[Pio] Loaded: ${src}`);
                resolve();
            };
            script.onerror = (e) => {
                console.error(`[Pio] Failed to load: ${src}`, e);
                reject(e);
            };
            document.head.appendChild(script);
        });
    };

    try {
        if (isModel3) {
            // === SDK 4 加载流程 (严格顺序) ===

            // 1. 加载 Live2D Cubism Core (必须第一个)
            await loadScript(
                "https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js",
                "cubism-core"
            );

            // 2. 加载 PixiJS (必须第二个)
            await loadScript(
                "https://cdn.jsdelivr.net/npm/pixi.js@5.3.6/dist/pixi.min.js",
                "pixi-js"
            );

            // 3. 确认 PIXI 存在
            if (typeof PIXI === 'undefined') {
                throw new Error("[Pio] PIXI not loaded!");
            }
            console.log("[Pio] PIXI version:", PIXI.VERSION);

            // 4. 加载 Pixi-Live2D-Display
            await loadScript(
                "https://cdn.jsdelivr.net/npm/pixi-live2d-display/dist/cubism4.min.js",
                "pixi-live2d-display"
            );

            // 5. 加载本地适配器
            await loadScript("/pio/static/pio_sdk4.js", "pio-sdk4-adapter");

            // 6. 加载 UI 逻辑
            await loadScript("/pio/static/pio.js", "pio-main");

        } else {
            // === SDK 2 加载流程 ===
            await loadScript("/pio/static/l2d.js", "l2d-lib");
            await loadScript("/pio/static/pio.js", "pio-main");
        }

        // 全部加载完成后，初始化
        setTimeout(initPio, 100);

    } catch (err) {
        console.error("Failed to load Pio assets:", err);
    }
}

onMount(() => {
    if (!pioConfig.enable) return;
    if (pioConfig.hiddenOnMobile && window.matchMedia("(max-width: 1280px)").matches) return;

    setTimeout(loadPioAssets, 0);
});

// 清理（可选，防止 Swup 切换时出问题）
onDestroy(() => {
    pioInitialized = false;
});
</script>

{#if pioConfig.enable}
<div class={`pio-container ${pioConfig.position || 'left'}`} bind:this={pioContainer}>
    <div class="pio-action"></div>
    <canvas
        id="pio"
        bind:this={pioCanvas}
        width={pioConfig.width || 280}
        height={pioConfig.height || 250}
        style="width: {pioConfig.width || 280}px; height: {pioConfig.height || 250}px;"
    ></canvas>
</div>
{/if}

<style>
    #pio { display: block; }
</style>
