---
{"tags":["Analysis","teaching","mathematics"],"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Gâteaux Derivative.md","permalink":"/ii-teaching/mathematics/gateaux-derivative/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-08T18:42:15.000-10:00","updated":"2026-02-09T15:52:41.853-10:00"}
---


Subjects: [[charleshoots.net/II. Teaching/Mathematics/Metric and Normed Spaces\|Metric and Normed Spaces]]
Links: [[charleshoots.net/II. Teaching/Mathematics/Fréchet-Derivative\|Fréchet-Derivative]], [[charleshoots.net/II. Teaching/Mathematics/Differentiability of Vector valued functions of Rn#^5fd4a0\|Partial Derivatives in Rn]] 

We have the the limit called the directional derivative of $\varphi$ at $u_0$ in the direction $v$. We get the function ${\cal G}\varphi(u_0):V \to W$, given as
$$
{\cal G}\varphi(u_0)v :=\lim_{t\to 0}\frac{\varphi(u_0+tv)-\varphi(u_0)}{t}
$$

The function $\varphi:\Omega\to W$ is Gâteaux differentiable at the point $u_0\in \Omega$ if for all $v\in V$, there's a directional derivative of $\varphi$ at $u_0$ in the direction $v$ and the function ${\cal G}\varphi(u_0)$ defined above belongs to ${\cal B}(V, W)$. 
$\varphi$ is *Gâteaux-differentiable on $\Omega$* if it is differentiable at every point $u\in \Omega$. The function
$$
{\cal G}\varphi:\Omega\to {\cal B}(V, W)
$$
is called the *Gâteaux derivative* of $\varphi$. 

$\varphi:\Omega \to W$ is of class $\cal C^1$ on $\Omega$ iff $\varphi$ is Gâteaux-differentiable on $\Omega$ and its Gâteaux derivative ${\cal G}\varphi:\Omega\to {\cal B}(V, W)$ is continuous. In this case $\varphi'={\cal G}\varphi$.

