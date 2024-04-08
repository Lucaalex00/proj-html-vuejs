
<script>
export default {
    name: "AppHeader",
    data() {
        return {
            
            /* ... */
        }
    }
}
</script>
<template>
    <div id="site_header">
        <div class="header_container">
            <ul class="header_list">
                <li> <img src="../assets/img/" alt=""></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <!-- /.header_list -->
        </div>
        <!-- /.header_container -->
    </div>
    <!-- /#site_header -->
</template>


<style scoped>
#site_header{
    background-color: var(--lighter-color);
    width: 100vw;
    height: 100px;
    position: fixed;
}

</style>