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
        let r=30;
        let dx = -0.5;
        let dy = -1.5;
        //Paddle
        let paddleHeight = 10;
        let paddleWidth = 70;
        let rightPressed = false;
        let leftPressed = false;
        let paddleX:number;

        onMounted(async () => {
            x = my_canvas.value!.width/2;
            y = my_canvas.value!.height-30;
            console.log(typeof(my_canvas));
            const ctx = my_canvas.value?.getContext('2d')!;
            if (ctx==null){
                return;
            }
            //描画ループを定義する
            setInterval(draw, 10);
            paddleX = (my_canvas.value!.width-paddleWidth)/2;
            window.addEventListener('keydown', keyDownHandler, false);
            window.addEventListener('keyup', keyUpHandler, false);
        });
        const keyDownHandler = (e:KeyboardEvent) => {
            if (e.key=='Right'||e.key=='ArrowRight'){
                rightPressed = true;
            } else if (e.key == 'Left'||e.key=='ArrowLeft'){
                leftPressed= true;
            }
        };
        const keyUpHandler = (e:KeyboardEvent) => {
            if (e.key=='Right'||e.key=='ArrowRight'){
                rightPressed = false;
            } else if (e.key == 'Left'||e.key=='ArrowLeft'){
                leftPressed= false;
            }
        };
        const drawPaddle = ()=>{
            const ctx = my_canvas.value?.getContext('2d')!;
            if (ctx==null){
                return;
            }
            //Paddle
            if (rightPressed && paddleX < my_canvas.value!.width-paddleWidth){
                paddleX += 7;
            }
            if (leftPressed&&paddleX>0){
                paddleX -= 7;
            }
            ctx.beginPath();
            ctx.fillStyle = '#0095DD';
            ctx.fillRect(paddleX,my_canvas.value!.height-paddleHeight, paddleWidth, paddleHeight);
            ctx.closePath();
        };
        const draw = ()=>{
            //キャンバスの準備
            const ctx = my_canvas.value?.getContext('2d')!;
            if (ctx==null){
                return;
            }
            //画面クリア
            ctx.clearRect(0, 0, my_canvas.value!.width, my_canvas.value!.height);


            ctx.beginPath();
            //背景を描く
            ctx.fillStyle='rgb(255,255,255)';
            ctx.strokeStyle='rgb(0,0,0)';
            ctx.fillRect(0,0,my_canvas.value!.width, my_canvas.value!.height);
            ctx.strokeRect(0,0,my_canvas.value!.width, my_canvas.value!.height);
            //円を描く
            ctx.arc(x, y, r, 0, Math.PI*2, false);//円の中心x,円の中心y,円の半径, 開始角度と終了角度，描く方向(falseなら時計回り)

            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.closePath();
            drawPaddle();
            if (dx<0 && x-r<0||dx>0&&x+r>my_canvas.value!.width){
                dx*=-1;
            }
            if (dy<0 && y-r<0||dy>0&&y+r>my_canvas.value!.height){
                dy*=-1;
            }
            x += dx;
            y += dy;
        };
        return {
            my_canvas,
            drawPaddle,
            draw,
        };
    }
});
</script>
<style>
* { padding: 0; margin: 0; }
canvas { background: #eee; display: block; margin: 0 auto; }
</style>