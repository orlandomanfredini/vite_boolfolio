<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-3 logo">LOGO</div>
                <div class="col-3">
                    <ul>
                        <RouterLink class="link" :to="{name : 'home'}">Home</RouterLink>
                        <RouterLink class="link" :to="{name : 'portfolio'}">Projects</RouterLink>
                        <RouterLink class="link" :to="{name : 'contact'}">Contact us</RouterLink>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
header{
    background-color: rgb(220, 151, 151);
    padding: 30px;

    .container{
        max-width: 1000px;
        margin: auto ;

        .row{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: nowrap;

            .col-3{
                width: calc(4 * (100% /12));
            }


            ul{
                display: flex;
                align-items: center;
                justify-content: end;
                gap: 6px;

                .link{
                    color: black;
                    text-decoration: none;
                }
            }

        }
    }
}
</style>