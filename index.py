import http.server

httpd = http.server.HTTPServer(('0.0.0.0', 1234), http.server.SimpleHTTPRequestHandler)

httpd.serve_forever()