<template>
    <nav class="navBar flex_space_between">
        <div class="flex_space_between">
            <div class="menu_toggle flex_y_center">
                <b-icon icon="text-right" aria-hidden="true"></b-icon>
            </div>
            <div class="logo flex_y_center">
                <img src="../../assets/images/helpMeLogo.png" alt="">
            </div>
            <div class="lang flex_y_center">
                <select>
                    <option value="" selected disabled>العربية(AR)</option>
                    <option value="EN">EN</option>
                </select>
            </div>
        </div>
        <div class=" navBar_actions flex_all_center">
            <div class="person_icone flex_all_center">
                <b-icon icon="person-fill" aria-hidden="true"></b-icon>
            </div>
            
            <b-icon icon="bell-fill" aria-hidden="true"></b-icon>
            <b-icon icon="chat-left-fill" aria-hidden="true"></b-icon>
            <b-icon icon="gear-fill" aria-hidden="true"></b-icon>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'Nav'    
}
</script>
<style lang="scss" scoped>
.navBar{
    background-color: #F5F5F5;
    box-shadow: 0 0 10px #DDD;
    padding: 5px 30px;
    .menu_toggle{
        cursor: pointer;
        margin-left: 30px;
        @media(max-width: 768px) {
            margin-left: 10px;
        }
        svg{
            font-size: 50px;
            @media(max-width: 576px) {
                font-size: 30px;
            }
        }
    }
    .logo{
        margin-left: 30px;
        @media(max-width: 768px) {
            margin-left: 10px;
        }
        img{
            width: 85px;
            @media(max-width: 576px) {
                width: 50px;
            }
        }
    }
    .lang{
        select{
            border: 0;
            background-color: transparent;
            font-size: 26px;
            font-weight: 600;
            @media(max-width: 576px) {
                font-size: 18px;
            }
        }
    }

    .navBar_actions{

        .person_icone{
            background-color: #18A19A;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-left: 30px;
            @media(max-width: 768px) {
                margin-left: 10px;
            }
            @media(max-width: 576px) {
                width: 20px;
                height: 20px;
            }
            cursor: pointer;
            svg{
                color: #FFF !important;
                font-size: 20px;
                margin-left: 0;
                @media(max-width: 576px) {
                    font-size: 15px;
                }
            }
        }
        svg{
            color: #18A19A;
            font-size: 30px;
            margin-left: 30px;
            @media(max-width: 576px) {
             font-size: 20px;
            }
            @media(max-width: 768px) {
                margin-left: 10px;
            }
            cursor: pointer;
        }
    }
}
</style>