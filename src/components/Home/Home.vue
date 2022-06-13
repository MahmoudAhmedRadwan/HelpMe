<template>
    <div class="home">
        <NavBar />

        <section class="short_cuts sectionMT">
            <h3 class="sectionTitle">الاختصارات</h3>

            <div class="cards_container flex_all_center">
                <div class="card flex_y_center" v-for="(card, index) in cards" :key="index">
                    <img :src="card.img" alt="">
                    <router-link to="">{{card.routeTitle}}</router-link>
                </div>
            </div>
        </section>

        <section class="sections sectionMT">
            <h3 class="sectionTitle">الأقسام</h3>
            <div class="sections_container flex_all_center">
                <div class="section flex_all_center" v-for="(section, index) in sections" :key="index" :class="section.className">
                    <router-link to=""> {{section.routerTitle}} </router-link>
                </div>
            </div>

        </section>

        <section class="statistics sectionMT">
            <h3>الأحصائيات</h3>
            <div class="cards_container flex_all_center">
                <div class="card flex_y_center" v-for="(statistic, index) in statistics" :key="index">
                    <h4> {{statistic.title}} </h4>
                    <h3 :class="statistic.color"> {{statistic.number}} </h3>
                    <router-link to="">{{statistic.routeTitle}}</router-link>
                </div>
            </div>
        </section>

        <section class="schools sectionMT">
            <div class="title flex_space_between">
                <b-icon icon="chevron-right" aria-hidden="true"></b-icon>
                <h3>المدارس</h3>
                <b-icon icon="chevron-left" aria-hidden="true"></b-icon>
            </div>

            <div class="flex_all_center">
                <div class="img_container flex_y_center" v-for="(scool, index) in scools" :key="index">
                    <img :src="scool.img" alt="">
                    <p> {{scool.routeTitle}} </p>
                </div>
            </div>
        </section>

        <section class="reports sectionMT">
            <h3 class="sectionTitle">التقارير</h3>
            <div class="cards_container flex_all_center">
                <div class="card flex_y_center" v-for="(report, index) in reports" :key="index">
                    <img :src="report.img" alt="">
                    <router-link to="">{{report.routeTitle}}</router-link>
                </div>
            </div>
        </section>

        <Footer />
    </div>
</template>
<script>

import NavBar from '../Glopal/NavBar.vue'
import Footer from '../Glopal/Footer.vue'
export default {
    name: 'Home',
    components: {
        NavBar,
        Footer,
    },
    data(){
        return{
            cards: [
                {
                    img: [require("../../assets/images/shortCuts1.png")],
                    routeTitle: 'إضافة طفل'
                },
                {
                    img: [require("../../assets/images/shortCuts2.png")],
                    routeTitle: 'إضافة متخصص'
                },
                {
                    img: [require("../../assets/images/shortCuts4.png")],
                    routeTitle: 'إضافة فصل'
                },
                {
                    img: [require("../../assets/images/shortCuts3.png")],
                    routeTitle: 'إضافة مدرسة'
                },
            ],
            sections: [
                {
                    routerTitle: 'إسناد طفل',
                    className: 'blue'
                },
                {
                    routerTitle: 'جدول المواعيد',
                    className: 'green'
                },
                {
                    routerTitle: 'الحضور و الغياب',
                    className: 'orange'
                },
                {
                    routerTitle: 'تقييم المعلمين',
                    className: 'whiteBlue'
                },
                {
                    routerTitle: 'الحسابات',
                    className: 'blue'
                },
                {
                    routerTitle: 'الإشعارات',
                    className: 'green'
                },
            ],
            statistics: [
                {
                    title: 'عدد الاطفال',
                    number: '18',
                    routeTitle: '< المزيد',
                    color: 'orangeColor'
                },
                {
                    title: 'عدد المعلمين',
                    number: '12',
                    routeTitle: '< المزيد',
                    color: 'blueColor'
                },
                {
                    title: 'عدد التقييمات',
                    number: '5',
                    routeTitle: '< المزيد',
                    color: 'yellowColor'
                },
                {
                    title: 'عدد المدارس',
                    number: '4',
                    routeTitle: '< المزيد',
                    color: 'blueColor'
                },
                {
                    title: 'عدد الجلسات',
                    number: '12',
                    routeTitle: '< المزيد',
                    color: 'greenColor'
                },
            ],
            scools: [
                {
                    img: [require("../../assets/images/school.png")],
                    routeTitle: 'الأمل'
                },
                {
                    img: [require("../../assets/images/school.png")],
                    routeTitle: 'الأمل'
                },
                {
                    img: [require("../../assets/images/school.png")],
                    routeTitle: 'الأمل'
                },
                {
                    img: [require("../../assets/images/school.png")],
                    routeTitle: 'الأمل'
                },
                {
                    img: [require("../../assets/images/school.png")],
                    routeTitle: 'الأمل'
                },
                {
                    img: [require("../../assets/images/school.png")],
                    routeTitle: 'الأمل'
                },
            ],
            reports: [
                {
                    img: [require("../../assets/images/report1.png")],
                    routeTitle: 'تقرير الأطفال'
                },
                {
                    img: [require("../../assets/images/report2.png")],
                    routeTitle: 'تقرير الجلسات'
                },
                {
                    img: [require("../../assets/images/report3.png")],
                    routeTitle: 'تقرير المستخدمين'
                },
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
.home{
    background-image: url('../../assets/images/background.png');
}
.card{
    width: 170px;
    height: 170px;
    box-shadow: 0 0 10px #DDD;
    border-radius: 10px;
    background-color: #F8F8F8;
    border: 0;
    padding: 0 10px;
    margin: 0 25px 20px 25px;
    img{
        width: 110px;
        height: 100px;
    }
    a{
        background-color: #18A19A;
        display: block;
        border-radius: 10px;
        color: #FFF;
        font-size: 18px;
        font-weight: 600;
        width: 100%;
        text-align: center;
        padding: 4px;
    }
}

.sections{
    .sections_container{
        padding: 0 200px;
        @media(max-width: 1300px) {
            padding: 0 20px;
        }
        .section{
            width: 162px;
            height: 105px;
            border-radius: 20px;
            margin: 0 10px 20px 10px;
            transition: .3s ease-in-out;
            a{
                font-size: 18px;
                font-weight: 600;
                color: #FFF;
            }
        }
        .section:hover{
            transform: translate(0, -10px);
        }
    }
}
.blue{
    background-color: #4634BA;
}
.green{
    background-color: #8DC63F;
}
.orange{
    background-color: #F99A08;
}
.whiteBlue{
    background-color: #355EF1;
}

.statistics{
    h3{
        font-size: 26px;
        font-weight: 800;
        text-align: center;
        margin-bottom: 50px;
    }
    .card{
        padding: 10px 12px;
        height: unset;
        h4{
            font-size: 20px;
            font-weight: 700;
        }
        h3{
            font-size: 70px;
            margin-bottom: 10px;
        }
    }
}
.orangeColor{
    color: #F99A08;
}
.blueColor{
    color: #355EF1;
}
.yellowColor{
    color: #E8E72B;
}
.greenColor{
    color: #8DC63F;
}

.schools{
    .title{
        padding: 0 100px 50px 100px;
        @media(max-width: 576px) {
            padding: 0 50px 50px 50px;
        }
        svg{
            font-size: 30px;
            cursor: pointer;
        }
        h3{
            font-size: 26px;
            font-weight: 800;
            text-align: center;
        }
    }

    .img_container{
        border-radius: 50%;
        width: 170px;
        height: 170px;
        border: 6px solid #0D817B;
        padding: 10px;
        background-color: #F8F8F8;
        margin: 0 10px 20px 10px;
        img{
            width: 100px;
        }
        p{
            color: #0D817B;
            font-size: 24px;
        }
    }
}

.reports{
    margin-bottom: 50px;
    .card{
        img{
            margin-bottom: 10px;
        }
        a{
            border-radius: 13px;
        }
    }
}
</style>