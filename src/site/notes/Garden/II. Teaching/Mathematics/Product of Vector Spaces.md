---
{"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Product of Vector Spaces","permalink":"/II. Teaching/Mathematics/Product of Vector Spaces/","tags":["LinearAlgebra","teaching","mathematics"],"noteIcon":"1","created":"2026-02-11T19:13:57.409-10:00","updated":"2026-02-11T20:25:20.999-10:00"}
---



Subjects: [[charleshoots.net/II. Teaching/Mathematics/Linear Algebra\|Linear Algebra]]

Links: [[charleshoots.net/II. Teaching/Mathematics/Vector Spaces\|Vector Spaces]]

Let $\{(V_i, +, \cdot)\}_{i=0}^n$ be a collection of vector spaces over the field $\mathbb F$. Then the _product of vector spaces is:_

$$ \prod_{i=0}^nV_i=\left\{(v_i)_{i=0}^n\mid \forall 0\le i \le n [v_i\in V_i]\right\} $$

with the following operations, let $(v_i)_{i=0}^n, (w_i)_{i=0}^n \in \prod V_i$, and $\lambda \in \mathbb F$:
$$ (v_i)_{i=0}^n +(w_i)_{i=0}^n = (v_i + w_i)_{i= 0}^n \newline \newline \lambda(v_i)_{i=0}^n = (\lambda v_i)_{i=0}^n $$

Then $\prod V_i$ is a vector space over the field $\mathbb F$.

Given that every $V_i$ is finite dimensional vector spaces, then:

$$ \dim\left(\prod_{i=0}^n V_i\right) = \sum_{i=0}^n \dim(V_i) $$

Let $\{U_i\}_{i=0}^n$ be a collection of subspaces of $V$. Defining a linear map $\Gamma: \prod U_i \to \sum U_i$, such that:

$$ \Gamma(u_i)_{i=0}^n = \sum_{i=0}^n u_i $$

$\Gamma$ is injective iff $\sum U_i$ is a direct sum.