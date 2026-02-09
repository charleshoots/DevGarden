---
{"tags":["Analysis"],"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Bounded Function Spaces.md","permalink":"/ii-teaching/mathematics/bounded-function-spaces/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-08T18:42:15.000-10:00","updated":"2026-02-09T11:03:45.473-10:00"}
---


Subjects: [[charleshoots.net/II. Teaching/Mathematics/Metric and Normed Spaces\|Metric and Normed Spaces]]
Links: [[charleshoots.net/II. Teaching/Mathematics/Normed Vector Spaces\|Normed Vector Spaces]], [[charleshoots.net/II. Teaching/Mathematics/Metric Spaces\|Metric Spaces]], [[charleshoots.net/II. Teaching/Mathematics/Complete Metric Spaces\|Complete Metric Spaces]]

A function $f:S \to X$ is **bounded** if there are $c \in \Bbb R$ and $x_0 \in X$ such that, for any $z \in S$ $$ d(f(z), x_0)\le c $$We denote
$$ \mathcal B(S, X) := \{ f:S \to X\mid f\text{ is bounded} \} $$
and we define $$ d_\infty(f,g) = \sup_{z \in S}d(f(z), g(z)) $$$d_\infty$ is a metric on $\mathcal B(S,X)$. This metric is called the **uniform metric.**

**Prop:** If $X$ is a complete metric space, then $\mathcal B(S, X)$ is also complete with the uniform metric.

If $V$ is a vector space, the set of all function from $S$ to $V$ is a vector space with the operations $$ (f+g)(z) := f(z)+g(z) \qquad (\lambda f)(z) := \lambda f(z) $$
If $V$ is a normed space with norm $\|\cdot\|$, then $\mathcal B(S, V)$ is a vector space and$$ \|f\|_\infty := \sup_{z \in S}\|f(z)\| $$is a norm in $\mathcal B(S , V)$. This norm is called the **uniform norm.**