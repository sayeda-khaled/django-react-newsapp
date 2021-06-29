from rest_framework import permissions

class IsAuthOrReadOnly(permissions.BasePermission):
    if request.method in permissions.SAFE_METHODS:
        return true

    if request.method == 'DELETE':
        return obj.user == request.uer or request.user.is_staff

    return obj.user == request.user
