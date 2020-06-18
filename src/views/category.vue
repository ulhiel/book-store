<template>
  <div class="base-container">
      <top-message></top-message>
      <top-navbar></top-navbar>
      <top-category></top-category>
      <div class="container-fluid my-3 px-5 text-left">
          <div class="row justify-content-center">
              <div class="col-md-10">
                <div class="breadcrumb">
                    BUKU / FILSAFAT &AMP; PEMIKIRAN
                </div>
              </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-10 row align-items-center justify-content-between">
                <div class="col-md-6">
                    <div class="category-title">
                        FILSAFAT &AMP; PEMIKIRAN
                    </div>
                </div>
                <div class="col-md-5">
                    <form>
                        <div class="form-group row justify-content-end row align-items-center my-0">
                            <label for="filter" class="col-sm-4 col-form-label">Urutkan Berdasarkan</label>
                            <div class="col-sm-6">
                                <select name="filter" class="form-control"></select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
          </div>
          <div class="row my-3 justify-content-center">
              <div class="col-md-10 row justify-content-center">
                <card-display></card-display>
                <card-display></card-display>
                <card-display></card-display>
                <card-display></card-display>
                <card-display></card-display>
                <card-display></card-display>
                <card-display></card-display>
                <card-display></card-display>
                <card-display></card-display>
                <card-display></card-display>
              </div>
          </div>
          <div class="row my-3 justify-content-center">
            <button class="btn btn-outline-dark">Muat Lebih Banyak</button>
          </div>
      </div>
      <footer-bottom></footer-bottom>
  </div>
</template>

<script>

export default {

}
</script>

<style>
    .breadcrumb {
        font-size: 0.80rem;
    }

    .category-title {
        font-size: 2rem;
        font-weight: bold;
    }
</style>