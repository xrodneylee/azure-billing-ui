<template>
    <div class="pieChart">
        <div class="card w-25" style="background-color:#212C3B">
            <div class="card-body">
                <form action="" method="post">
                    <div class="form-group">
                        <input type="text" class="form-control" name="username" placeholder="Username" style="background-color:#1C2531">
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" name="password" placeholder="Password" style="background-color:#1C2531">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'pie-chart',
    data() {
        return {
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>