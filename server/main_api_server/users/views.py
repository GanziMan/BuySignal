from django.http import JsonResponse
from django.views import View
from .models import *

class User_seller_info(View):
    def get(self, request, *args, **kwargs):
        '''
        :param request: http get
            - username (str): The username of the Seller.
            - password_hash (str): The password hash of the Seller.

        :return: JsonResponse
        '''
        return self.get_seller_info(request)

    def put(self, request, *args, **kwargs):
        return self.put_seller_info(request)

    def post(self, request, *args, **kwargs):
        return self.put_seller_info(request)


    def get_seller_info(self, request):
        username = request.GET.get('username')
        password_hash = request.GET.get('password_hash')

        if not username or not password_hash:
            return JsonResponse({'error': 'Username and password_hash are required.'}, status=400)

        try:
            # Fetch the Buyer based on username and password_hash
            seller = Seller.objects.get(username=username, password_hash=password_hash)

            # Prepare the response data
            seller_info = {
                'id': seller.id,
                'username': seller.username,
                'seller_name': seller.seller_name,
                'email': seller.email,
                'no_bizcode': seller.no_bizcode,
                'no_social': seller.no_social,
                'first_name': seller.first_name,
                'last_name': seller.last_name,
                'phone_number': seller.phone_number,
                'point': str(seller.point),  # Convert Decimal to string for JSON serialization
                'coupon_list': seller.coupon_list,
                'created_at': seller.created_at.isoformat(),
                'updated_at': seller.updated_at.isoformat(),
            }

            return JsonResponse(seller_info, status=200)

        except Seller.DoesNotExist:
            return JsonResponse({'error': 'Buyer not found.'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    def put_seller_info(self, request):
        # 여기에 PUT 요청을 처리하는 로직을 작성합니다.
        return JsonResponse({'message': 'PUT user info'})

    def post_seller_info(self, request):
        # 여기에 PUT 요청을 처리하는 로직을 작성합니다.
        return JsonResponse({'message': 'PUT user info'})


class User_buyer_info(View):
    def get(self, request, *args, **kwargs):
        '''
        :param request: http get
            - username (str): The username of the Buyer.
            - password_hash (str): The password hash of the Buyer.

        :return: JsonResponse
        '''
        return self.get_buyer_info(request)

    def put(self, request, *args, **kwargs):
        return self.put_buyer_info(request)

    def post(self, request, *args, **kwargs):
        return self.put_buyer_info(request)


    def get_buyer_info(self, request):
        username = request.GET.get('username')
        password_hash = request.GET.get('password_hash')

        if not username or not password_hash:
            return JsonResponse({'error': 'Username and password_hash are required.'}, status=400)

        try:
            # Fetch the Buyer based on username and password_hash
            buyer = Buyer.objects.get(username=username, password_hash=password_hash)

            # Prepare the response data
            buyer_info = {
                'id': buyer.id,
                'username': buyer.username,
                'email': buyer.email,
                'first_name': buyer.first_name,
                'last_name': buyer.last_name,
                'phone_number': buyer.phone_number,
                'point': str(buyer.point),  # Convert Decimal to string for JSON serialization
                'coupon_list': buyer.coupon_list,
                'created_at': buyer.created_at.isoformat(),
                'updated_at': buyer.updated_at.isoformat(),
            }

            return JsonResponse(buyer_info, status=200)

        except Buyer.DoesNotExist:
            return JsonResponse({'error': 'Buyer not found.'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    def put_buyer_info(self, request):
        # 여기에 PUT 요청을 처리하는 로직을 작성합니다.
        return JsonResponse({'message': 'PUT user info'})

    def post_buyer_info(self, request):
        # 여기에 PUT 요청을 처리하는 로직을 작성합니다.
        return JsonResponse({'message': 'PUT user info'})
