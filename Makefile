start_be:
	@node server/server.js

refresh: refresh_users refresh_products
	@echo "Refresh all data"

refresh_users:
	@node server/migrations/users.js

refresh_products:
	@node server/migrations/products.js