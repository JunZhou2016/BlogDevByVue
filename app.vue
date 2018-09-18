<template>
          <div>
            <router-view></router-view>    
          </div>    
</template>
<script>
    import Item from './components/item.vue';
    import dailyArticle from './components/daily-article.vue';
    import BlogFrame from './components/blog-frame.vue';
    import BlogLog from './components/blog-log.vue';
    import $ from './libs/util';
    
    export default {
        //components: { Item, dailyArticle ,BlogFrame,BlogLog},
        data () {
            return {
                themes: [],
                showThemes: false,
                type: 'recommend',
                recommendList: [],
                dailyTime: $.getTodayTime(),
                list: [],
                themeId: 0,
                articleId: 0,
                isLoading: false
            }
        },
        methods: {
            handleToRecommend () {
                this.type = 'recommend';
                this.recommendList = [];
                this.dailyTime = $.getTodayTime();
                this.getRecommendList();
            },
            handleToTheme (id) {
                this.type = 'daily';
                this.themeId = id;
                this.list = [];
                $.ajax.get('theme/' + id).then(res => {
                    this.list = res.stories
                        .filter(item => item.type !== 1);
                })
            },
            getThemes () {
                $.ajax.get('themes').then(res => {
                    this.themes = res.others;
                })
            },
            getRecommendList () {
                this.isLoading = true;
                const prevDay = $.prevDay(this.dailyTime + 86400000);
                $.ajax.get('news/before/' + prevDay).then(res => {
                    this.recommendList.push(res);
                    this.isLoading = false;
                })
            },
            formatDay (date) {
                let month = date.substr(4, 2);
                let day = date.substr(6, 2);
                if (month.substr(0, 1) === '0') month = month.substr(1, 1);
                if (day.substr(0, 1) === '0') day = day.substr(1, 1);
                return `${month} 月 ${day} 日`;
            },
            handleClick (id) {
                this.articleId = id;
            }
        },
        mounted () {
            this.getRecommendList();
            this.getThemes();
            const $list = this.$refs.list;
            // $list.addEventListener('scroll', () => {
            //     if (this.type === 'daily' || this.isLoading) return;
            //     if
            //     (
            //         $list.scrollTop
            //         + document.body.clientHeight
            //         >= $list.scrollHeight
            //     )
            //     {
            //         this.dailyTime -= 86400000;
            //         this.getRecommendList();
            //     }
            // });
        }
    }
</script>