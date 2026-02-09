---
{"tags":["GroupTheory"],"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Finite Abelian Groups.md","permalink":"/ii-teaching/mathematics/finite-abelian-groups/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-07T20:00:04.000-10:00","updated":"2026-02-08T18:08:02.797-10:00"}
---

Subjects: [[charleshoots.net/II. Teaching/Mathematics/Group Theory\|Group Theory]]
Links: [[charleshoots.net/II. Teaching/Mathematics/Fourier Analysis on finite abelian groups\|Fourier Analysis on finite abelian groups]], [[charleshoots.net/II. Teaching/Mathematics/Groups\|Groups]], [[charleshoots.net/II. Teaching/Mathematics/Direct Product of Groups\|Direct Product of Groups]], [[charleshoots.net/II. Teaching/Mathematics/Cyclic Groups\|Cyclic Groups]]

**Th:** Every finite abelian group $G$ it can be decomposed as the product of cyclic groups: $$G \cong C(m_1)\times \dots \times C(m_n) $$where each $C(m_i)$ is the cyclic group of order $m_i$, and $m_i \mid m_{i+1}$ for each $i = 1, \dots, n$.

**Cor:** If $G$ is a finite abelian group and $k$ a divisor of $|G|$, then there's a subgroup of order $k$.

**Def:** If $p$ is a prime, then an abelian group $G$ is a *$p$-primary* if for each $a\in G$, then there is $n \ge 1$ with $p^n a = 0$.  If $G$ is an abelian group, the its $p$-*primary component* is $$G_p:= \{ a \in G \mid p^n a = 0 \text{ for some } n \ge 1\}$$
**Lemma:** 

**Primary Decomposition Theorem:** 
- Every finite abelian group $G$ is the direct product of its $p$-primary components: $$G \cong \prod_{p} G_p$$
- Two finite abelian groups $G$ and $G'$ are isomorphic iff $G_p \cong G'_p$ for every prime.

