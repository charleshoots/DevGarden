---
{"tags":["FourierAnalysis","PartialDifferentialEquations"],"dg-publish":true,"dg-path":"I. Teaching/Mathematics/2D Wave Equation","permalink":"/i-teaching/mathematics/2-d-wave-equation/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-08T18:42:15.000-10:00","updated":"2026-06-29T09:06:44.090-10:00"}
---


Subjects: [[charleshoots.net/I. Teaching/Mathematics/Fourier Analysis\|Fourier Analysis]], [[LEGACY/J o u r n a l/Partial Differential Equations\|Partial Differential Equations]]
Links: [[charleshoots.net/I. Teaching/Mathematics/The Wave equation\|The Wave equation]], [[charleshoots.net/I. Teaching/Mathematics/3D Wave Equation\|3D Wave Equation]]

We can use the solution of the wave equation in three dimensions leads to a solution of the wave equation in two dimensions

We define the corresponding mean: $$\widetilde M t(F)(x) =\frac1{2\pi} \int{|y| \le 1} F(x-ty) (1-|y|^2)^{-1/2}, dy$$
This is not a spherical mean, but is related being a weighted ball average, since it has a weight function .

Let $f,g \in \mathcal S(R_{2} )$, then we would like to solve the problem: 

$\Delta u = \frac{\partial^2 u}{\partial t^2} \quad$ \text{subject to} $\quad u(x, 0) = f(x) \quad \text{and}\quad \frac{\partial u}{\partial t} (x, 0)=g(x)$

with this in mind we could just extend  to  with a mute third variable. This is a good approach, the problem is that if it is constant with respect to the third variable, then those extensions aren't in 

to solve this problem, let's fix , and consider the function , being , when . Now the functions: $$\tilde f^\flat(x_1, x_2, x_3) = f(x_1, x_2) \eta(x_3) \qquad\text{and}\qquad \tilde g^\flat(x_1, x_2, x_3) = g(x_1, x_2) \eta(x_3)$$
We can see that if we have a function , then we can get the neat identity $$M_t(H)(x_1, x_2, 0) = \widetilde M_t (h)(x_1, x_2)$$
We can solve the wave equation $$\Delta \tilde u^\flat = \frac{\partial^2 \tilde u^\flat}{\partial t^2} \quad \text{subject to} \quad \tilde u^\flat(x, 0) = \tilde f^\flat(x) \quad \text{and}\quad \frac{\partial u}{\partial t} (x, 0)=\tilde f^\flat(x)$$
Then what we can do know is define the function . We know how to calculate  it is: $$\tilde u^\flat(x,t) = \frac{\partial}{\partial t}(t M_t(\tilde f^\flat)(x)) + t M_t(\tilde g^\flat)(x)$$
We can calculate how would , the solution to the 2D wave equation by applying our identity, getting that $$u(x,t) = \frac{\partial}{\partial t}(t \widetilde M_t(f)(x))+t\widetilde M_t(g)(x)$$

We see that that in the case of , then the solution at the point  depends only on the data at the boundary of the base of the backward light cone will affect the solution. For the case where , we don't see this behaviour, we actually see that the solution at  depends on the whole base of the backward light cone.