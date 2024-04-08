<script>
    export default {
        name: "showCarsComponent",
        
    }
</script>

<template>
    <div id="site_search_cars">
        <div class="select_cars">
            <div class="field">
                <a href="#">Keywords</a>
            </div>
            <div class="field">
                <a href="#">Location</a>
            </div>
            <div class="field">
                <a href="#">All Categories</a>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="field">
                <a href="#">Brands</a>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="field">
                <a href="#">Fuel type</a>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="field">
                <a href="#">Trasmission</a>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="field">
                <a href="#">Status</a>
                <i class="fa-solid fa-caret-down"></i>
            </div>
            <div class="field field_search">
                <a href="#">Search</a>
            </div>
        </div>
        <!-- /.select_cars -->
    </div>
    <!-- /#search_cars -->
</template>


<style scoped>

#site_search_cars{
    width: 80%;
    margin: auto;
    padding: 0.5rem;
    >.select_cars{
        display: flex;
        justify-content: space-between;
        >.field{
            border: 1px solid var(--dark-color);
            padding: 1rem 2rem;
            position: relative;
            &:hover {
                background-color: var(--dark-color);
                border: 1px solid var(--darkest-color);
            }
            >i{
                position: absolute;
                right: 0;
                padding: 4px;
                font-size: 0.6rem;
                top: 50%;
                transform: translateY(-50%);
            }
            >a{
                text-decoration: none;
                color: var(--darkest-color);
            }
        }
        .field_search{
            background-color: var(--darkest-color);
            >a{
                color: var(--lighter-color);
            }
            &:hover>a{
                color: black;
            }
        }
    }
}
</style>