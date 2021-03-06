<view class="tab-bar-root {{layoutClass}}  cml-base cml-view">
  <view class="tab-bar-wrap   cml-base cml-view" style="{{tabbar.tabbarStyle || ';'}}">
    <view qq:for="{{tabbar.list }}" qq:key="text" class="tab-item-wrap  cml-base cml-view">
      <view class="tab-content  cml-base cml-view" bindtap="_cmlInline" data-eventtap="{{['onTabbarItemTap',index]}}">
        <view class="tab-icon-wrap  cml-base cml-view" qq:if="{{!top && hasIcon}}">
          <image qq:if="{{!(index === tapedIndex)}}" class="tab-icon  cml-base cml-image" src="{{item.icon}}" style="{{!(index === tapedIndex) ? item.iconStyle || '' : ';'}}"></image>
          <image qq:if="{{index === tapedIndex}}" class="tab-icon  cml-base cml-image" src="{{item.selectedIcon || item.icon}}" style="{{index === tapedIndex ? item.selectedIconStyle || '' : ''}}"></image>
        </view>
        <view class="tab-title  cml-base cml-view">
          <text class="tab-text  cml-base cml-text" style="{{index === tapedIndex ? tabbar.selectedTextStyle || 'color:#61c7fc' : tabbar.textStyle || 'color:#000000'}}">{{item.text}}</text>
        </view>
      </view>
    </view>
  </view>
  <view qq:if="{{top}}" class="line-wrap  cml-base cml-view" style="{{tabLineStyle}}"></view>

</view>