---
title: "Funciones Básicas de Excel"
description: "Aprende las funciones esenciales: Suma, Promedio, Max, Min, Contar y más."
pubDate: 2024-01-20
category: "excel"
tags: ["fórmulas", "funciones", "matemáticas"]
---

# Funciones Básicas de Excel

Una **función** es una fórmula predefinida que realiza cálculos utilizando valores específicos en un orden particular.

Aquí están las funciones fundamentales que todo usuario de Excel debe conocer.

## 📅 Fecha y Hora

### HOY
Devuelve la fecha actual.
- **Sintaxis**: `=HOY()`
- **Ejemplo**: `=HOY()` → `17/01/2026`

### AHORA
Devuelve la fecha y la hora actuales.
- **Sintaxis**: `=AHORA()`
- **Ejemplo**: `=AHORA()` → `17/01/2026 14:30`

---

## 🔢 Matemáticas y Estadística

### SUMA
Suma todos los números en un rango de celdas.
- **Sintaxis**: `=SUMA(número1; [número2]; ...)`
- **Ejemplo**: `=SUMA(A1:A5)` → `150`

### PROMEDIO
Calcula la media aritmética (el promedio) de los argumentos.
- **Sintaxis**: `=PROMEDIO(número1; [número2]; ...)`
- **Ejemplo**: `=PROMEDIO(B1:B10)` → `8.5`

### PROMEDIOA
Calcula la media aritmética, pero incluye celdas con texto o valores lógicos (que cuentan como 0 o 1).
- **Sintaxis**: `=PROMEDIOA(número1; [número2]; ...)`
- **Ejemplo**: `=PROMEDIOA(B1:B10)` → `8.5`

### MAX
Devuelve el valor máximo (el número más grande) de una lista de valores.
- **Sintaxis**: `=MAX(número1; [número2]; ...)`
- **Ejemplo**: `=MAX(C1:C20)` → `100`

### MIN
Devuelve el valor mínimo (el número más pequeño) de una lista de valores.
- **Sintaxis**: `=MIN(número1; [número2]; ...)`
- **Ejemplo**: `=MIN(D1:D15)` → `5`

---

## 🧮 Conteo

### CONTAR
Cuenta cuántas celdas de un rango contienen **números**.
- **Sintaxis**: `=CONTAR(valor1; [valor2]; ...)`
- **Ejemplo**: `=CONTAR(A1:A10)` → `8`

### CONTARA
Cuenta cuántas celdas de un rango **no están vacías** (cuenta texto, números, errores, etc).
- **Sintaxis**: `=CONTARA(valor1; [valor2]; ...)`
- **Ejemplo**: `=CONTARA(B1:B10)` → `10`
