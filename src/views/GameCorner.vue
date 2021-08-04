<template>
    <div id="game_corner" class="container">
        <div class="col-sm-12">
                <h2>ゲームコーナー</h2>
        </div>
        <div class="col-sm-12">
            <canvas id="myCanvas" ref="my_canvas" width="480" height="320"></canvas>
        </div>
        <button value="Reload" onclick="window.location.reload();">Reload</button>
    </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
    e: '#game_corner',
    //data・methods・computed・ライフサイクルメソッドなどの区別がなくなり、全てがsetupメソッドの中に記述される
    setup :() =>{
        
        const my_canvas=ref<HTMLCanvasElement|null>(null) ;
        let x:number;
        let y:number;
        //
        onMounted(async () => {
            //const canvas = document.getElementById('myCanvas');
            x = my_canvas.value!.width/2;
            y = my_canvas.value!.height-30;
            console.log(typeof(my_canvas));
            const ctx = my_canvas.value?.getContext('2d')!;
            if (ctx==null){
                return;
            }
            //描画ループを定義する
            setInterval(draw, 10);

        });
        const draw = ()=>{
            //キャンバスの準備
            const ctx = my_canvas.value?.getContext('2d')!;
            if (ctx==null){
                return;
            }

            let dx = 2;
            let dy = -2;
            //画面クリア
            ctx.clearRect(0, 0, my_canvas.value!.width, my_canvas.value!.height);
            //円を描く
            ctx.beginPath();
            ctx.arc(x, y, 20, 0, Math.PI*2, false);//円の中心x,円の中心y,円の半径, 開始角度と終了角度，描く方向(falseなら時計回り)
            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.closePath();
            x += dx;
            y += dy;
        };
        return {
            my_canvas,
            draw
        };
    }
});
</script>
<style>
* { padding: 0; margin: 0; }
canvas { background: #eee; display: block; margin: 0 auto; }
</style>