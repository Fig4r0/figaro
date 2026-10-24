#!/usr/bin/env python3
import urllib.request
import json
import os
import sys

TOKEN = os.environ.get('NETLIFY_AUTH_TOKEN', 'nfp_NafgFZbwXdX8ZGnwmncF6UP4FtLUYStFea87')
SITE_ID = '0ed8822d-d58e-4363-bca4-50b4f423e44d'
ZIP_PATH = '/Users/jaimedanus/Desktop/jaimedanus-web.zip'

def deploy():
    if not os.path.exists(ZIP_PATH):
        print(f"Error: {ZIP_PATH} not found.")
        sys.exit(1)

    url = f"https://api.netlify.com/api/v1/sites/{SITE_ID}/deploys"
    with open(ZIP_PATH, 'rb') as f:
        data = f.read()

    print(f"Subiendo {len(data)} bytes a Netlify ({url})...")
    req = urllib.request.Request(
        url,
        data=data,
        headers={
            'Authorization': f'Bearer {TOKEN}',
            'Content-Type': 'application/zip'
        },
        method='POST'
    )

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            res = json.loads(resp.read())
            print(f"Despliegue publicado con éxito en https://jaimedanus.netlify.app")
            print(f"Deploy ID: {res.get('id')} - Estado: {res.get('state')}")
    except Exception as e:
        print(f"Error al desplegar en Netlify: {e}")
        sys.exit(1)

if __name__ == '__main__':
    deploy()
