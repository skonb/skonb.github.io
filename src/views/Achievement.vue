<template>
	<div id="Top" class="top">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>業績</h2>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">
                                <span class="orange_ur">
                                名南ネットワークでの<br/>アルバイト
                                </span>
                            </h3>
                            <p class="card-text">
                                期間 : 2017年7月~現在<br/>
                                概要 : 学部1年次から，株式会社名南ネットワークにて，Webエンジニアとしてアルバイトをしています．業務では，フロントエンドのHTML5，jQuery，BootStrapを用いてUI/UXをデザインしたり，JavaEEのバックエンド・サーバープログラムを記述するほか，AWSを用いたクラウドインフラに携わることもあります．
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">
                                <span class="orange_ur">
                                スタートアップ立ち上げ
                                </span>
                            </h3>
                            <p class="card-text">
                            期間 : 2019年4月~8月<br/>
                            概要 : 学部3年次に，自身の先輩のスタートアップ起業に協力しました．主にフロントエンドエンジニアとして，Angularフレームワークを用いたTypeScriptによる開発に携わりました．開発を通じて，単にお金を稼ぐために開発を行うのではなく，夢や目標を持って事業に取り組むことの価値を感じました．
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-4">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">
                                <span class="orange_ur">
                                    プログラミングサークルでの活動
                                </span>
                            </h3>
                            <p class="card-text">
                            期間 : 2017年5月~2019年3月<br/>
                            概要 : 学部2年次から，スマートフォンアプリ開発サークルに所属し，活動していました．サークル内では，文化祭発表用の成果物としてAndroidアプリ開発の開発・チームの指揮を行いました．
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-12">

                    <h3>
                        <span class="orange_ur">
                        コメントコーナー
                        </span>
                    </h3>
                    <br/>
                    <form>
                        <div id="comment-corner">
                            <ul>
                                <li v-for="item in items" :key="item.message">
                                    {{ item.name }} : {{ item.comment }} -{{item.commentdate}}
                                </li>
                            </ul>
                            お名前
                            <div class="form-group">
                                <input type="text" v-model="tmp_name" class="form-control" placeholder="お名前" aria-label="Recipient's username" aria-describedby="basic-addon2">
                            </div>
                            コメント
                            <div class="form-group">
                                <input type="text" v-model="tmp_comment" class="form-control" placeholder="Enter comment" aria-label="Recipient's username" aria-describedby="basic-addon2">
                                <small id="commentHelp" class="form-text text-muted">感想・質問など，ご自由にコメントください．</small>
                            </div>
                            <br/>
                            <button type=button class='btn btn-primary' v-on:click="addComment(tmp_comment)">
                            投稿
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
	</div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Top',
    data: function() {
        return {
            tmp_name:'',
            tmp_comment:'',
            items:[
                //{name:"テストさん",comment:"テスト",commentdate:"2021-04-01"}
            ] as any[] 
        };
    },
    methods: {
        addComment: function() {
            let err_msg='';
            if (this.tmp_comment==''){
                err_msg+='・コメントを入力してください\n';
            }
            if (this.tmp_name==''){
                err_msg+='・名前を入力してください\n';
            }
            //エラー出力
            if (!(err_msg=='')){
                alert(err_msg);
                return;
            }

            let today = new Date();
            //formattedは2021-04-01 00:11:22みたいな感じに整形される
            let formatted = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${(today.getDate()).toString().padStart(2,'0')}  ${(today.getHours()).toString().padStart(2,'0')}:${(today.getMinutes()).toString().padStart(2,'0')}:${(today.getSeconds()).toString().padStart(2,'0')}`;

            this.items.push({name:this.tmp_name,'comment':this.tmp_comment, 'commentdate':formatted});
            this.tmp_name = '';
            this.tmp_comment = '';
        }
    }
});
</script>
