from django.urls import path
from shop.views import *

urlpatterns = [
    path('user/', UserView.as_view(), name='User'), # 유저정보조회,저장
    path('pruduct/main/', ProductMain.as_view(), name='PruductMain'), # 메인탭-상품조회
    path('pruduct/explore/', ProductExplore.as_view(), name='PruductExplore'), # 전체탭-상품검색조회
    path('pruduct/detail/', ProductDetail.as_view(), name='PruductDetail'), # 상품상세조회
    path('cart/', Cart.as_view(), name='Cart'), # 장바구니 조회, 추가, 삭제
    path('like/', Like.as_view(), name='Like'), # 상품 찜
    # path('banner/', Banner.as_view(), name='Banner'),
]