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
            # Fetch all products
            products = Product.objects.all()

            # Prepare the response data
            products_data = [{
                'user': product.user.username,  # Assuming you want the username of the user
                'name': product.name,
                'price': str(product.price),  # Ensure price is serialized correctly
                'sale_price': str(product.sale_price),  # Ensure sale_price is serialized correctly
                'sale_rate': str(product.sale_rate) if product.sale_rate is not None else None,  # Handle None case
                'activate': product.activate,
                'stock': product.stock,
                'category': product.category.name if product.category else None,  # Get category name
                'created_at': product.created_at.isoformat(),  # Convert datetime to ISO format
                'updated_at': product.updated_at.isoformat(),  # Convert datetime to ISO format
            } for product in products]

            return JsonResponse(products_data, safe=False, status=200)  # Set safe=False

        except Product.DoesNotExist:
            return JsonResponse({'error': 'Products not found.'}, status=404)

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)