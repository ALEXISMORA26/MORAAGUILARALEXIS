import random
from sympy import isprime, mod_inverse
import tkinter as tk
from tkinter import messagebox

# Función para generar un número primo aleatorio de 2 a 4 dígitos
def generar_primo():
    while True:
        num = random.randint(10, 9999)
        if isprime(num):
            return num

# Función para calcular e
def calcular_e(fi_n):
    while True:
        e = random.randint(2, fi_n - 1)
        if gcd(e, fi_n) == 1:
            return e

# Función para calcular el máximo común divisor (mcd)
def gcd(a, b):
    while b:
        a, b = b, a % b
    return a

# Generar p y q
p = generar_primo()
q = generar_primo()

# Calcular N y φ(N)
N = p * q
fi_n = (p - 1) * (q - 1)

# Calcular e y d
e = calcular_e(fi_n)
d = mod_inverse(e, fi_n)

# Función de cifrado
def cifrar(mensaje, e, N):
    return [pow(int(char), e, N) for char in mensaje]

# Función de descifrado
def descifrar(cifrado, d, N):
    return ''.join([str(pow(char, d, N)) for char in cifrado])

# Interfaz gráfica
def cifrar_mensaje():
    mensaje = entry_mensaje.get()
    if not mensaje.isdigit():
        messagebox.showerror("Error", "El mensaje debe contener solo números")
        return
    cifrado = cifrar(mensaje, e, N)
    entry_cifrado.delete(0, tk.END)
    entry_cifrado.insert(0, ' '.join(map(str, cifrado)))

def descifrar_mensaje():
    cifrado = entry_cifrado.get().split()
    cifrado = [int(num) for num in cifrado]
    mensaje_descifrado = descifrar(cifrado, d, N)
    entry_descifrado.delete(0, tk.END)
    entry_descifrado.insert(0, mensaje_descifrado)

# Crear ventana
root = tk.Tk()
root.title("Cifrado RSA")

tk.Label(root, text="Mensaje (solo números):").pack()
entry_mensaje = tk.Entry(root)
entry_mensaje.pack()

tk.Button(root, text="Cifrar", command=cifrar_mensaje).pack()

tk.Label(root, text="Mensaje cifrado:").pack()
entry_cifrado = tk.Entry(root)
entry_cifrado.pack()

tk.Button(root, text="Descifrar", command=descifrar_mensaje).pack()

tk.Label(root, text="Mensaje descifrado:").pack()
entry_descifrado = tk.Entry(root)
entry_descifrado.pack()

root.mainloop()
