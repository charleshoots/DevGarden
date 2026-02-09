---
{"tags":["Analysis"],"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Extrema of a Differentiable Functions on Manifolds.md","permalink":"/ii-teaching/mathematics/extrema-of-a-differentiable-functions-on-manifolds/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-08T18:42:15.000-10:00","updated":"2026-02-09T11:03:46.274-10:00"}
---


Subjects: [[charleshoots.net/II. Teaching/Mathematics/Metric and Normed Spaces\|Metric and Normed Spaces]]
Links: [[charleshoots.net/II. Teaching/Mathematics/Fréchet-Derivative\|Fréchet-Derivative]], [[charleshoots.net/II. Teaching/Mathematics/Lagrange Multipliers\|Lagrange Multipliers]], [[charleshoots.net/II. Teaching/Mathematics/Implicit Function Theorem\|Implicit Function Theorem]], [[charleshoots.net/II. Teaching/Mathematics/Existence of Maximums and Minimums of Functions on Metric Spaces\|Existence of Maximums and Minimums of Functions on Metric Spaces]]

Let $\Omega$ be an open subset of an Banach space $Y$, $\varphi:\Omega\to \Bbb R^m$ class $\mathcal C^1$, $c \in \Bbb R^m$ and $M:= \varphi^{-1}[\{c\}] = \{u \in \Omega\mid \varphi(u) = c \}$.   

**Prop:** If $c$ is a regular value of $\varphi$ then for each $u \in M$, $$T_uM = \{\sigma'(0) \mid \sigma\in \Gamma_u(M)\}$$where $\Gamma_u(M)$ is the set of all functions $\sigma:(-\varepsilon, \varepsilon) \to Y$ of class $\mathcal C^1$ such that $\sigma(0) = u$ and $\sigma(t)\in M$ for each $(-\varepsilon, \varepsilon)$. 

**Def:** A subset $M$ of a Banach space $Y$ it is called a *submanifold of $Y$ of class $\mathcal C^k$ and of codimension* $m$ if it exists a function $\varphi:\Omega\to \Bbb R^m$ of class $\mathcal C^k$ defined on an open subset $\Omega$ of $Y$ that contains $M$ and a regular value $c\in\Bbb R^m$ of $\varphi$ such that $M=\{u\in \Omega \mid \varphi(u) =c \}$. 

**Prop:** Let $M$ be submanifold of a Banach space $Y$, $\Omega$ an open subset of $Y$ that contains $M$, and $g:\Omega \to \Bbb R$ is of class $\mathcal C^1$. If $u$ is a local maximum or local minimum on $M$, then $$g'(u) v = 0 \qquad \forall v \in T_u M$$
**Def:** Let $M$ be a submanifold of a Banach space $Y$, $\Omega$ is an open subset of $Y$ that contains $M$, and $g: \Omega \to \Bbb R$ is a function of class $\mathcal C^1$. We say that a point $u\in M$ is a *critical point of $g$ on* $M$ if$$g'(u) v = 0 \qquad \forall v \in T_u M$$
We see that local maxima and local minima are critical points of $g$ on $M$.

##### Lagrange Multipliers
Let $\Omega$ an open set of $\Bbb R^n$, $\varphi =(\varphi_1, \dots, \varphi_m):\Omega\to \Bbb R^m$ is a function of class $\mathcal C^1$, $c \in \Bbb R^m$ is a regular value of $\varphi$ and $M:=\{x \in\Bbb R^n \mid \varphi(x)= c\}$. Let $g:\Omega \to \Bbb R$ a function of class $\mathcal C^1$. Then $x_0$ is a critical point of $g$ on $M$ iff there exists unique $\lambda_1, \dots, \lambda_m\in \Bbb R$ such that $$\nabla g(x_0) = \sum_{i = 1}^m \lambda_i \nabla\varphi_i(\xi) \qquad \text{and} \qquad \varphi(\xi) = c$$
Which cam be done in it in a really simple way