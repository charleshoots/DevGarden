---
{"tags":["#FourierAnalysis","#PartialDifferentialEquations","teaching","mathematics"],"dg-publish":true,"dg-path":"II. Teaching/Mathematics/3D Wave Equation","permalink":"/II. Teaching/Mathematics/3D Wave Equation/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-11T19:13:57.377-10:00","updated":"2026-02-11T20:25:22.950-10:00"}
---



Subjects: [[charleshoots.net/II. Teaching/Mathematics/Fourier Analysis\|Fourier Analysis]], [Partial Differential Equations](../../../LEGACY/J%20o%20u%20r%20n%20a%20l/Partial%20Differential%20Equations)
Links: [The Wave equation](The%20Wave%20equation), [[charleshoots.net/II. Teaching/Mathematics/Fourier Transform in Rn\|Fourier Transform in Rn]], [[charleshoots.net/II. Teaching/Mathematics/Scalar Surface Integral\|Scalar Surface Integral]]

If $\Bbb S^2$ denotes the unit sphere in $\Bbb R^3$, we define the *spherical mean* of $f$ over the sphere of radius $t$ centred at $x$ by $$M_t(f)(x) = \frac{1}{4\pi} \int_{\Bbb S^2} f(x-t\gamma)\, d\sigma(\gamma)$$where $d\sigma(\gamma)$ is the element of surface area for $\Bbb S^2$. Since $4\pi$ is the area of the unit sphere, we can interpret $M_t(f)$ as the average value of $f$ over the sphere centred at $x$ with radius $t$

We can also write this in another form $$M_t(f)(x) ) \frac1{|S(x,t)|} \int_{S(x, t)} f(\gamma)\,d\sigma(\gamma)$$where $S(x, t)$ denotes the sphere of centre $x$ and radius $t$ and $|S(x, t)$ its area. 

**Lemma:** If $f\in \mathcal S(\Bbb R^3)$ and $t$ is fixed, then $M_t(f) \in \mathcal S(\Bbb R^3)$. Moreover $M_t(f)$ is infinitely differentiable in $t$, and each $t$-derivative also belongs to $\mathcal S(\Bbb R^3)$


**Lemma:** $$\frac1{4\pi} \int_{\Bbb S^2} e^{-2\pi i \omega\cdot \gamma}\, d\sigma(\gamma) = \frac{\sin(2\pi\|\omega\|)}{2\pi\|\omega\|}$$
By the defining formula for the spherical mean, we may interpret $M_t(f)$ as a convolution of the function $f$ with the element $d\,\sigma$, and since the Fourier transform interchanges convolutions with products, we are lead to believe that $\widehat{M_t(f)}$ is the product of the corresponding Fourier transforms. $$\widehat{M_t(f)}(\omega) = \hat f(\omega) \frac{\sin(2\pi \|\omega\| t)}{2\pi \|\omega\| t}$$
**Th:** The solution when $n = 3$ of the Cauchy problem wave equation $$\Delta u = \frac{\partial^2 u}{\partial t^2} \quad \text{subject to} \quad u(x, 0) = f(x) \quad \text{and}\quad \frac{\partial u}{\partial t} (x, 0)=g(x)$$
is given by $$u(x,t) = \frac{\partial}{\partial t}(t M_t(f)(x)) + t M_t(g)(x)$$
We can get another way to solve to write the solution, using the other way to write the spherical mean of $f$, getting $$u(x, t) = \frac1{|S(x,t)}\int_{S(x,t)} [tg(y)+f(y)+ \nabla f(y) \cdot (y-x)]\, d\sigma(y)$$
This alternate expression for the solution of the wave equation is sometimes called *Kirckchoff's* formula