---
{"dg-publish":true,"dg-path":"II. Teaching/Mathematics/limsup and liminf","permalink":"/II. Teaching/Mathematics/limsup and liminf/","tags":["RealAnalysis","teaching","mathematics"],"noteIcon":"1","created":"2026-02-11T19:13:57.414-10:00","updated":"2026-02-11T20:25:22.852-10:00"}
---



Subjects: [[charleshoots.net/II. Teaching/Mathematics/Real Analysis\|Real Analysis]]
Links: [[charleshoots.net/II. Teaching/Mathematics/Properties of Limits of Sequences in R\|Properties of Limits of Sequences in R]] [[charleshoots.net/II. Teaching/Mathematics/Limits of a Sequence in R\|Limits of a Sequence in R]]
The concept of $\limsup$ and $\liminf$ of a sequence , is to put a long term upper bound and lower bound of a sequence. The $\limsup$ of a sequence as: given the sequence $(y_n)$ defined as follow:

$$ y_n = \sup\{x_k \mid k \geq n \} \text{ and } \lim_{n \to\infty} y_n := \limsup x_n = a $$

For some $a$ , or as the following:

$$ \forall\varepsilon>0\exists N \in\mathbb{N}[\forall n \geq N(x_n - \varepsilon < a)] $$

And the $\liminf$ is defined similarly with a sequence $(z_n)$ defined as:

$$ z_n = \inf \{x_k \mid k \geq n \} \text{ and } \lim_{n \to\infty} z_n := \liminf x_n =b $$

for some $b$, or as the following:

$$ \forall\varepsilon > 0\exists N\in\mathbb{N}[\forall n\geq N(x_n < b +\varepsilon) ] $$

The good thing is that $\limsup$ and $\liminf$ of a sequence exist with weaker conditions, as long as the sequence is bounded, both most exist, and even if it’s not bounded one of them can exist.

### Algebraic Properties

Given a bounded sequence $(a_n)$

$$ \liminf a_n \leq \limsup a_n $$

The sequence $(a_n)$ converges to a limit if and only if $\liminf a_n = \limsup a_n$

Given two sequences bounded $(a_n)$ and $(b_n)$ then, the following properties hold:

- $\limsup(a_n + b_n) \leq \limsup a_n + \limsup b_n$
- $\liminf(a_n +b_n) \geq \liminf a_n+\liminf b_n$
- $\limsup(a_nb_n)\leq (\limsup a_n)(\limsup b_n)$
- $\liminf(a_n b_n) \geq (\liminf a_n)(\liminf b_n)$
- If a constant $c \in \mathbb{R}^+$ then, $\limsup{ca_n} = c\limsup a_n$ and $\liminf ca_n = c\liminf a_n$
- If a constant $c \in \mathbb{R}^-$ then, $\limsup ca_n = c\liminf a_n$ and $\liminf ca_n = c\limsup a_n$