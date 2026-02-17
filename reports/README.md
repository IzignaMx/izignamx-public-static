### CSP Reports

Este directorio contiene el colector y los logs de violaciones de la Content Security Policy (CSP) del sitio principal **izignamx.com**.

- Endpoint principal: `https://izignamx.com/reports/csp-report.php`
- Grupo `Report-To`: `csp-endpoint` (definido en los headers que entrega Apache)
- Logs generados: `reports/csp-violations-YYYY-MM-DD.jsonl` (formato JSON Lines, un reporte por línea)
- El `.htaccess` bloquea el acceso público directo a los logs; solo el script PHP puede escribirlos.

### Cómo probar el endpoint en el hosting de producción

1. Enviar un ejemplo de `report-uri`:

```
curl -X POST \
  -H "Content-Type: application/csp-report" \
  --data '{"csp-report":{"document-uri":"https://izignamx.com/","violated-directive":"script-src","effective-directive":"script-src","blocked-uri":"inline","original-policy":"default-src 'self'"}}' \
  https://izignamx.com/reports/csp-report.php -i
```

2. Enviar un ejemplo de `Report-To` (Reporting API):

```
curl -X POST \
  -H "Content-Type: application/reports+json" \
  --data '[{"type":"csp-violation","age":0,"url":"https://izignamx.com/","user_agent":"curl","body":{"document-uri":"https://izignamx.com/","effective-directive":"script-src","violated-directive":"script-src","blocked-uri":"inline","original-policy":"default-src 'self'","disposition":"report"}}]' \
  https://izignamx.com/reports/csp-report.php -i
```

### Cómo leer los logs en el servidor

```
Get-Content reports/csp-violations-$(Get-Date -Format yyyy-MM-dd).jsonl -Tail 50 -Wait
```

### Consejos de operación

- Filtra por `effective-directive` y `blocked-uri` para priorizar.
- Considera rotación/depuración externa si el sitio tiene tráfico alto.
- Puedes probar cambios usando `Content-Security-Policy-Report-Only` antes de endurecer la política principal.
- El endpoint acepta tanto `application/csp-report` (header `report-uri`) como `application/reports+json` (Reporting API / `report-to`).
