<template>
    <div id="game_corner" class="container">
        <div class="col-sm-12">
                <h2>ゲームコーナー</h2>
        </div>
        <div class="col-sm-12">
            <canvas id="myCanvas" ref="my_canvas" width="480" height="320"></canvas>
        </div>
        <button value="Reload" @click="reload()">Reload</button>
        <button value="CheatMode" @click="toggleCheat();">Cheat Mode</button>
    </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue';
import {useRouter} from 'vue-router';
//ブロックを書く
            
export default defineComponent({
    e: '#game_corner',
    //data・methods・computed・ライフサイクルメソッドなどの区別がなくなり、全てがsetupメソッドの中に記述される
    setup :() =>{
        //vue system
        const router = useRouter();

        //game system
        const my_canvas=ref<HTMLCanvasElement|null>(null) ;
        let dx = -1.5;
        let dy = -2.5;
        let interval:number;

        //ball
        let x:number;
        let y:number;
        let r=10;

        //Paddle
        let paddleHeight = 10;
        let paddleWidth = 70;
        let rightPressed = false;
        let leftPressed = false;
        let paddleX:number;
        let cheatMode=false;

        let brickRowCount = 3;
        let brickColumnCount = 5;
        let brickWidth = 75;
        let brickHeight = 20;
        let brickPadding = 10;
        let brickOffsetTop = 30;
        let brickOffsetLeft = 30;
        let bricks:Array<Array<any>>=[];
        for (let c=0;c<brickColumnCount;c++){
            bricks[c]=[];
            for (let r=0;r<brickRowCount;r++){
                bricks[c][r] = {x:0,y:0,state:1};
            }
        }

        onMounted(async () => {
            x = my_canvas.value!.width/2;
            y = my_canvas.value!.height-30;
            console.log(typeof(my_canvas));
            const ctx = my_canvas.value?.getContext('2d')!;
            if (ctx==null){
                return;
            }
            //描画ループを定義する
            interval = setInterval(draw, 10);
            paddleX = (my_canvas.value!.width-paddleWidth)/2;
            window.addEventListener('keydown', keyDownHandler, false);
            window.addEventListener('keyup', keyUpHandler, false);
        });
        //function about brics
        const drawBricks = () => {
            const ctx = my_canvas.value?.getContext('2d')!;
            for(var c=0; c<brickColumnCount; c++) {
                for(var r=0; r<brickRowCount; r++) {
                    if (bricks[c][r].state==1){
                        let brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
                        let brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
                        bricks[c][r].x = brickX;
                        bricks[c][r].y = brickY;
                        ctx.beginPath();
                        ctx.rect(brickX, brickY, brickWidth, brickHeight);
                        ctx.fillStyle = '#0095DD';
                        ctx.fill();
                        ctx.closePath();

                    }
                }
            }
        };
        /**
         * 衝突を検知する
         */
        const collisionDetection = () => {
            for(var c=0; c<brickColumnCount; c++) {
                for(var r=0; r<brickRowCount; r++) {
                    let b = bricks[c][r];
                    //衝突条件は
                    // 0. b.state==1(blockがまだ消えていない)
                    // 1. brickX<ballX-r
                    // 2. brickY<ballY-r
                    // 3. brickX + brickWidth >ballX+r
                    // 4. brickY + brickHeight >ballY+r
                    let cond0 = b.state==1;
                    let cond1 = b.x<x-r;
                    let cond2 = b.y<y-r;
                    let cond3 = b.x+brickWidth>x+r;
                    let cond4 = b.y+brickHeight>y+r;
                    if (cond0 &&cond1 && cond2 && cond3 && cond4){
                        dy *=-1;
                        b.state=0;
                    }
                }
            }
            
        };
        const toggleCheat=()=>{
            cheatMode = !cheatMode;
        };
        const keyDownHandler = (e:KeyboardEvent) => {
            if (e.key=='Right'||e.key=='ArrowRight'){
                rightPressed = true//ブロックを書く
                ;
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
            if (cheatMode){
                paddleX = x-paddleWidth/2;
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
            
            //ブロックを書く


            ctx.fillStyle = 'green';
            ctx.fill();
            ctx.closePath();
            drawPaddle();
            collisionDetection();
            drawBricks();
            x += dx;
            y += dy;
            if (dx<0 && x-r<0||dx>0&&x+r>my_canvas.value!.width){
                dx*=-1;
            }
            if (dy<0 && y-r<0){
                dy*=-1;
            } else if (dy>0&&y+r>my_canvas.value!.height){
                if (x > paddleX && x<paddleX+paddleWidth){
                    dy*=-1;
                }else{
                    alert('Game Over');
                    reload();
                    clearInterval(interval);
                }
            }
        };
        const reload=()=> {
            router.go(0);
        };
        return {
            my_canvas,
            drawPaddle,
            draw,
            reload,
            toggleCheat
        };
    }
});
</script>
<style>
* { padding: 0; margin: 0; }
canvas { background: #eee; display: block; margin: 0 auto; }
</style>