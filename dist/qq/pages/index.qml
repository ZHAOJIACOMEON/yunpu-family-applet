<view class=" cml-base cml-view">
  <view style="height:{{viewPortHeight}}rpx;" class=" cml-base cml-view">
    <userHome qq:if="{{currentComp === 'userHome'}}" is="{{currentComp}}" class=" cml-base cml-component  cml-view cml-userHome"></userHome><findHome qq:if="{{currentComp === 'findHome'}}" is="{{currentComp}}" class=" cml-base cml-component  cml-view cml-findHome"></findHome><familyHome qq:if="{{currentComp === 'familyHome'}}" is="{{currentComp}}" class=" cml-base cml-component  cml-view cml-familyHome"></familyHome><messageHome qq:if="{{currentComp === 'messageHome'}}" is="{{currentComp}}" class=" cml-base cml-component  cml-view cml-messageHome"></messageHome><c-tabbar qq:if="{{currentComp === 'c-tabbar'}}" is="{{currentComp}}" class=" cml-base cml-component  cml-view cml-c-tabbar"></c-tabbar>
  </view>
  <c-tabbar bindonclick="_cmlEventProxy" data-eventonclick="{{['handleTabbarClick']}}" data-modelkey="currentComp" bindinput="_cmlModelEventProxy" value="{{currentComp}}" tabbar="{{tabbar}}" class="tab-wrap  cml-view cml-c-tabbar"></c-tabbar>
</view>