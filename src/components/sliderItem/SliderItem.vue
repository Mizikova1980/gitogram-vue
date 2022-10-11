<template>
    <div class="slaider-wrapper">
        <div class="progress">
        <ProgressBar/>
        </div>
        <div class="slider-avatar">
            <Avatar
            avatar="https://www.fillmurray.com/300/300"
            username="joshua_l"
            />
        </div>
        <div class="slider-content">
            <img src="" alt="slider-foto"/>
            <p class="slider-text"><b>The easiest</b> way to get .NET 6 Preview 4 is to install the maui-check dotnet tool from CLI and follow the instructions.</p>
            <p class="slider-text">For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
            <p class="slider-text">In Preview 4 we enable push/pop navigation with NavigationPage. We added a concrete implementation of IWindow, and completed porting ContentPage from Xamarin.Forms</p>
            <p class="slider-text">For running on Mac you'll currently use your favorite text editor and terminal to edit and run apps. We expect Visual Studio for Mac .NET 6 support to begin arriving mid-year.</p>
        </div>
        <div class="slider-button">
            <xButton/>
        </div>
    </div>

</template>

<script>
import Avatar from './../avatar/Avatar.vue'
import xButton from './../button/button.vue'
import ProgressBar from './../progressBar/ProgressBar.vue'

export default {
  title: 'SliderItem',
  components: { Avatar, xButton, ProgressBar }
}
</script>

<style scoped>
.slaider-wrapper {
    width: 375px;
    height: 667px;
    border-radius: 8px;
}

.slider-avatar {
    border-bottom: 1px solid #c6c6c8;
    height: 57px;
}

.progress {
    margin-bottom: 18px;
}

.slider-content {
    margin-bottom: 24px;
    font-size: 14px;
    font-weight: 400;
    border-bottom: 1px solid #c6c6c8;
    overflow-y: scroll;
    padding: 0 24px 0 18px;
}

.slider-button {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>
