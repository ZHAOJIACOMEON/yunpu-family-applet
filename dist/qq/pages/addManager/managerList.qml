<view class="wrap  cml-base cml-view">
  <cml-buildin-input class="search-input  cml-base cml-input" placeholder="输入姓名搜索" focus="{{isfocus}}" bindblur="_cmlEventProxy" data-eventblur="{{['bindblurevent']}}"></cml-buildin-input>
  <view class="card  cml-base cml-view">
    <view class="item  cml-base cml-view">
      <view class="item-left  cml-base cml-view">
        <text class="manager-name  cml-base cml-text">张三</text>
        <text class="manager-role  cml-base cml-text">当前角色：管理员</text>
      </view>
      <cml-buildin-button class="item-right  cml-base cml-button" bindonclick="_cmlEventProxy" data-eventonclick="{{['handleEditRoleInfors']}}">编辑角色</cml-buildin-button>
    </view>
    <view class="item  cml-base cml-view">
      <view class="item-left  cml-base cml-view">
        <text class="manager-name  cml-base cml-text">张三</text>
        <text class="manager-role  cml-base cml-text">当前角色：管理员</text>
      </view>
      <cml-buildin-button class="item-right  cml-base cml-button" bindonclick="_cmlEventProxy" data-eventonclick="{{['handleEditRoleInfors']}}">编辑角色</cml-buildin-button>
    </view>
  </view>
  <custom-dialog dialogData="{{dialogData}}" bindhandleCloseParentDialogInfors="_cmlEventProxy" data-eventhandlecloseparentdialoginfors="{{['handleCloseParentDialogInfors']}}" class=" cml-view cml-custom-dialog"></custom-dialog>
  
</view>