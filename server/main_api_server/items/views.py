from django.http import JsonResponse
from django.views import View
from .models import *

class Item_product(View):
    def get(self, request, *args, **kwargs):
        '''
        :param request: http get
        :return: JsonResponse
        '''
        return self.get_products_info(request)

    def get_products_info(self, request):
        try:
            # Fetch the Buyer based on username and password_hash
            products = Product.objects.all()

            # Prepare the response data
            products = [{
            'user' : product.user,
            'name' : product.name,
            'price' : product.price,
            'sale_price' : product.sale_price,
            'sale_rate' : product.sale_rate,
            'activate' : product.activate,
            'stock' : product.stock,
            'category' : product.category,
            'created_at' : product.created_at,
            'updated_at' : product.updated_at
            } for product in products]

            return JsonResponse(products, status=200)

        except Product.DoesNotExist:
            return JsonResponse({'error': 'Products not found.'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)