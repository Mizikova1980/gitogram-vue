<template>
    <div class="wrapper wrapper__slider">
        <header class="header">
            <div class="xContainer">
                <button class="logo logo__white">
                    <Logo/>
                </button>
                <button class="close">
                    <Close />
                </button>
            </div>
        </header>
        <div class="content">
          <SliderList :initialSlide="Number($route.params.initialSlide)"/>
        </div>
    </div>
</template>

<script>
import Logo from './../../icons/variants/logo.vue'
import Close from './../../icons/variants/close.vue'
import SliderList from './../sliderList/SliderList.vue'

export default {
  name: 'StoriesSlider',
  components: { Logo, Close, SliderList }
}

</script>

<style scoped>
  .wrapper__slider {
    background: #292929;
    width: 100%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .xContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 48px 120px 127px 120px;
  }

  .logo__white {
      width: 174px;
      height: 35px;
      color: white;
  }

  .close {
      width: 22px;
      height: 22px;
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

</style>
