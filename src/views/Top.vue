<template>
    <div id="app" class="container">
        <div class="col-lg-12">
            <div class="jumbotron">
                <h1 class="display-4">Welcome!</h1>
                <p class="lead">ポートフォリオ・ページへようこそ！</p>
                <hr class="my-4">
                <p class="text-align:left;">このページはポートフォリオとして制作したウェブページです．フロントエンドデザインには，Bootstrapフレームワークを含めたCSSを用いました．また，inputフォームを活用するため，JavaScript・Vueを使い，簡単なコメントコーナーも作ってみました．良ければ最後まで見ていってください．よろしくお願いいたします．</p>
            </div>
        </div>
        <div ref="fadein_refitem1" class="row before-shown">
            <div class="col-12">
                <h1>得意な言語</h1>
            </div>
            <!--<div class="col-lg-12 col-4" style="display:none" @scroll="handleScroll">-->
            <div  class="col-lg-12 col-4 " >
                <h2>Java</h2>
                JavaはSun Microsystemsが開発し，現在はOracleがベンダーとして開発しているプログラミング言語です．クラス中心のシステムで，オブジェクト指向・型システムがしっかりとしており，抽象的なアプリケーション構築が得意です．また，Java仮想マシンを介しているため，”Write once,run anywhere”をポリシーとしており，Androidスマートフォン，またサーバーアプリ開発では世界的に人気のある言語で，利用者数も多く，コミュニティが活発です．
                Javaはアルバイトで4年以上使用しており，かなり自信がある言語といえます．
            </div>
            <div class="col-lg-12 col-4 ">
                <h2>Python</h2>
                Pythonは動的型付けのスクリプト言語で，コードブロックをインデントで作るスタイルで有名です．コードが簡潔・可読性が高いことが特徴です．特に機械学習・ディープラーニングの分野で広く用いられており，自身の研究でも用いています．また，些細なツール・スクリプトを書く時にも有用だと感じています．
            </div>
            <div class="col-lg-12 col-4">
                <h2>JavaScript(jQuery)</h2>
                JavaScriptはNetScapeに起源を持ち，現在は標準化団体Ecmaによって標準化・整備されている言語です．
                Webフロント・バックエンドや，Unityの開発などに用いられ，特にWebフロントエンドで，DOMやスタイルの書き換えで動きのあるリッチなウェブページを作りたい場合は，JavaScriptの学習は避けては通れません．文法に起因する問題があり，実務ではなるべく利用したくないため，後述するTypeScriptへの移行を検討しています．
            </div>
        </div>
        <div ref="fadein_refitem2" class="row before-shown">
            <div class="col-lg-12">
                <h1>現在，学んでいる言語</h1>
            </div>
            <div class="col-lg-12 col-4">
                <h2>Go</h2>
                Javaは様々なプラットフォームで動作するなど優秀な言語ですが，コンパイルが極めて遅く，またメモリ消費も大きいという問題があります．Goはサーバーサイド開発において，そうした問題を解消しうる次世代の言語として期待しています．また，フォーマッタが公式から提供されているなど，コードスタイルが人によらないため，チーム開発でトラブルとなりにくい特徴もあります．ただし，機能が最小限であることや，例外・ジェネリクスがなく，独特の手法で対応しなければならないなど，Javaと比べ難易度が高いことは事実なので，ユースケースに合わせた使い分けが肝心であると考えています．
            </div>
            <div class="col-lg-12 col-4">
                <h2>TypeScript</h2>
                JavaScriptはWeb開発には必要不可欠ですが，型システムに起因する脆弱性があることが知られており，素のJavaSctiptを用いた開発は無用なバグ・不具合の原因となるだけでなく，セキュリティ上の問題も発生し得ます．
                TypeScriptは(any型を用いた抜け穴はあるものの)型付けとコンパイルにより，JavaScriptに比べ制約が強く，比較的安全に開発を進められる点が優秀です．また，VueやNode.jsなどの大手フレームワークでも標準での対応が進んでいます．自身もこうした利点に惹かれ，TypeScriptを学習しています．
            </div>
            <div class="col-lg-12 col-4">
                <h2>Vue</h2>
                現代ではSingle Page Application(SPA)と呼ばれる，DOMを差し替えることで，ページロードを挟まないリッチなUXを提供するウェブページが主流になり始めています．SPAを実現するためのフレームワークとして，ReactやVue，Angular等が挙げられますが，学習の手軽さ，Vue3からの新機能CompositionAPIについて学びたかったことから，現在はVueに絞って学習しています．
            </div>
        </div>

        <!--
        <div class="col-lg-12 fade-in-bottom">
            下からふわっと現れるアニメーション文字テスト
        </div>
        -->
    </div>
</template>
<script lang='ts'>
import { defineComponent,ref, onMounted} from 'vue';

export default defineComponent({
    e: '#app',
    setup:()=>{
        const fadein_refitem1 = ref<HTMLDivElement>();
        const fadein_refitem2 = ref<HTMLDivElement>();
        onMounted(()=>{
            let observer = new IntersectionObserver((entries) => {
                for (let entry of entries){
                    if (entry && entry.isIntersecting) {
                        entry.target.setAttribute(
                            'class',
                            'row fade-in-bottom'
                        );
                    }
                }
            });
            let target_element1 = fadein_refitem1.value;
            if (target_element1 instanceof HTMLDivElement){
                //console.log('fadein_refitem instanceof HTMLDivElement');
                observer.observe(target_element1);
            }
            let target_element2 = fadein_refitem2.value;
            if (target_element2 instanceof HTMLDivElement){
                //console.log('fadein_refitem instanceof HTMLDivElement');
                observer.observe(target_element2);
            }
        });
        return {
            fadein_refitem1,
            fadein_refitem2
        };
    },
});
</script>
<style>
/*下からフェードイン*/
.before-shown{
    opacity:0;
}
.fade-in-bottom {
   opacity: 0;
   animation-name: fadein-bottom;
   animation-duration: 1.5s;
   animation-timing-function: ease-out;
   animation-fill-mode: forwards;
}
@keyframes fadein-bottom {
   0% {
      opacity: 0;
      transform: translateY(20px);
   }
   100% {
      opacity: 1;
      transform: translateY(0);
   }
}
</style>