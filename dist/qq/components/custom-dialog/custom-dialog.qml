<view class="dialog-wrap  cml-base cml-view" id="dialogWrap" qq:if="{{dialogData.isShowModel}}" bindtap="_cmlEventProxy" data-eventtap="{{['handleCloseDialogInfors']}}">
  <view class="dialog-content  cml-base cml-view">
    <c-radio-group class="radio-button  cml-view cml-c-radio-group" option="{{ radioGroupOption }}" bindgroupchange="_cmlEventProxy" data-eventgroupchange="{{['handleChangeRadioInfors']}}"></c-radio-group>
    <cml-buildin-button class="button-sure  cml-base cml-button" text="保存设置" bindonclick="_cmlEventProxy" data-eventonclick="{{['handleEditSaveInfors']}}"></cml-buildin-button>
  </view> 
</view>