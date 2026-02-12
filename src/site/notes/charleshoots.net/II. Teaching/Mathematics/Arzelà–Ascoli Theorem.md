---
{"tags":["Analysis","teaching","mathematics"],"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Arzelà–Ascoli Theorem.md","permalink":"/ii-teaching/mathematics/arzela-ascoli-theorem/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-08T18:42:15.000-10:00","updated":"2026-02-09T15:52:42.225-10:00"}
---


Subjects: [[charleshoots.net/II. Teaching/Mathematics/Metric and Normed Spaces\|Metric and Normed Spaces]]
Links: [[charleshoots.net/II. Teaching/Mathematics/Space of Continuous Functions From Rn to Rm\|Space of Continuous Functions From Rn to Rm]], [[charleshoots.net/II. Teaching/Mathematics/Compact Sets in Rn\|Compact Sets in Rn]], [[charleshoots.net/II. Teaching/Mathematics/Compactness in Metric Spaces\|Compactness in Metric Spaces]], [[charleshoots.net/II. Teaching/Mathematics/Complete Metric Spaces\|Complete Metric Spaces]], [Continuous Function Spaces](Continuous%20Function%20Spaces.md), [[charleshoots.net/II. Teaching/Mathematics/Total Boundedness\|Total Boundedness]], [[charleshoots.net/II. Teaching/Mathematics/Relative Compactness in Metric Spaces\|Relative Compactness in Metric Spaces]], [[Compact Sets\|Compact Sets]]

For the rest of this section, let $K=(K, d_K)$ be a compact metric space and $(X, d_X)$ be a metric space, then we will consider the space of continuous functions

$$ {\cal C}^0(K, X) = \{f:K \to X\mid f \text{ is continuous} \} $$
## Arzelà-Ascoli Theorem
Let $K$ be a compact metric space, and $X$ be a complete metric space. A subset $\cal H$ of ${\cal C}^0(K, X)$ is relatively compact on ${\cal C}^0(K, X)$ iff $\cal H$ is [[charleshoots.net/II. Teaching/Mathematics/Equicontinuity\|equicontinuous]] and the sets

$$ {\cal H}(z) :=\{f(z) \mid f \in {\cal H}\} $$

are relatively compact in $X$ for all $z \in K$

Let $X$ and $K$ be compact metric spaces, then a subet ${\cal H}$ of ${\cal C}^0(K, X)$ is relatively compact iff ${\cal H}$ is equicontinuous.

Let $K$ be compact metric space, and $X$ be a complete metric space, the sequence $(f_k)$ in the space ${\cal C}^0(K, X)$ congerves pointwise to the function $f:K \to X$. If ${\cal H}:=\{ f_k \mid k \in \Bbb N\}$ is equicontinuous then $f$ is continuous and $f_k$ converges uniformly to $f$ or $f_k$ converges in ${\cal C}^0(K,X)$

### Arzelà-Ascoli Theorem to $\Bbb R^n$

Let $K$ be a compact metric space. A subset ${\cal H}$ of ${\cal C}^0(K, \Bbb R^n)$ is relatively compact on ${\cal C}^0(K, \Bbb R^n)$ iff $\cal H$ is equicontinuous bounded in ${\cal C}^0(K, \Bbb R^n)$

### **Arzelà–Ascoli** Theorem from $\Bbb R^m$ to $\Bbb R^n$
Let $A \subseteq \Bbb{R}^m$ be compact and let $B \subseteq \mathcal C(A, \Bbb{R}^n)$. If $B$ is bounded and equicontinuous, then any sequence in $B$ has a uniformly convergent subsequence.

Thus we have a characterization of sequential compactness in $\mathcal C(A, \Bbb{R}^n)$, when $A$ is compact.