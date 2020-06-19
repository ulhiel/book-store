<template>
    <div class="base-container book-show">
        <top-message></top-message>
        <top-navbar></top-navbar>
        <top-category></top-category>
        <div class="container-fluid my-3 px-5">
            <div class="row justify-content-center">
                <div class="col-sm-12 col-md-10">
                    <div class="breadcrumb">
                        BUKU / FIKSI POPULER / GURU AINI
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-12 col-md-10 row">
                    <div class="col-md-6">
                        <img src="../../public/img/image-1.png" alt="asdf" style="width:100%;height:auto;background-color:red">
                    </div>
                    <div class="col-md-6 text-left book-data">
                        <div class="title">
                            <div class="book">Guru Aini</div>
                            <div class="author">Andrea Hirata</div>
                        </div>
                        <div class="price">
                            Rp 72.000
                        </div>
                        <div class="description">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet commodo nulla facilisi nullam. Nunc mattis enim ut tellus elementum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Tempus urna et pharetra pharetra massa massa ultricies. Habitant morbi tristique senectus et netus et malesuada fames.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Sit amet commodo nulla facilisi nullam. Nunc mattis enim ut tellus elementum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Tempus urna et pharetra pharetra massa massa ultricies. Habitant morbi tristique senectus et netus et malesuada fames.</p>
                        </div>
                        <div class="data">
                            <table class="table">
                                <tr>
                                    <td>ISBN</td>
                                    <td>982-123-946-109-12</td>
                                </tr>
                                <tr>
                                    <td>Penerbit</td>
                                    <td>Bentang Pustaka</td>
                                </tr>
                                <tr>
                                    <td>Jumlah Halaman</td>
                                    <td>418</td>
                                </tr>
                                <tr>
                                    <td>Bahasa</td>
                                    <td>Indonesia</td>
                                </tr>
                                <tr>
                                    <td>Berat</td>
                                    <td>300 gram</td>
                                </tr>
                            </table>
                        </div>
                        <div class="action d-none d-md-block">
                            <book-action></book-action>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <similar-recomendation></similar-recomendation>
            </div>
            <div class="row justify-content-center">
                <div class="col-sm-12 col-md-10">
                    <book-review></book-review>
                </div>
            </div>
        </div>
        <footer-bottom></footer-bottom>
        <book-action class="d-block d-md-none" style="position:sticky;bottom:0"></book-action>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>