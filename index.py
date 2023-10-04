import http.server

httpd = http.server.HTTPServer(('1.1.1.1', 8080), http.server.SimpleHTTPRequestHandler)

httpd.serve_forever()