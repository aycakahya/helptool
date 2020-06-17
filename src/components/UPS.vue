<template> 
  <div class="row justify-content-center">
    <div class="col-8" style="padding-top: 50px;padding-left:100px;">
        <VueShowdown :markdown="fileContent"></VueShowdown>  
       </div>   
  </div>        
</template>

<script>
import mdFile from "!!raw-loader!../assets/UPS-Detail-Window.md";
export default {
  data() {
    return {
      fileContent: ""
    };
  },
  mounted() {
    this.getMDFile();
  },
  methods: {
    getMDFile() {
      this.fileContent = mdFile;
    }
  }
};
</script>
