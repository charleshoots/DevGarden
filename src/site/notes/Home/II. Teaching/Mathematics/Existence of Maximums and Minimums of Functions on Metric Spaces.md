---
{"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Existence of Maximums and Minimums of Functions on Metric Spaces","permalink":"/ii-teaching/mathematics/existence-of-maximums-and-minimums-of-functions-on-metric-spaces/","tags":["Analysis","teaching","mathematics"],"noteIcon":"1","created":"2026-02-11T19:13:57.396-10:00","updated":"2026-02-11T20:25:21.493-10:00"}
---



Subjects: [[charleshoots.net/II. Teaching/Mathematics/Metric and Normed Spaces\|Metric and Normed Spaces]]
Links: [[charleshoots.net/II. Teaching/Mathematics/Continuity on Metric Spaces\|Continuity on Metric Spaces]], [[charleshoots.net/II. Teaching/Mathematics/Compactness in Metric Spaces\|Compactness in Metric Spaces]]

Let $f:X \to \overline {\Bbb R}$ for the rest of this section

**Def:** We say that $f$ reaches its minimum on $X$ if there’s an $x_0 \in X$ such that

$$ f(x_0) \le f(x) \quad \forall x\in X $$

We say that $f$ reaches its maximum on $X$ if there’s $x_1 \in X$ such that

$$ f(x_1) \ge f(x) \quad \forall x\in X $$

The point $x_0$ is called a ***minimum*** of $f$ on $X$ and $x_1$ is called a ***maximum*** of $f$ on $X$.

**Prop:** If $K$ is a non empty compact metric space, then every continuous function $f:K \to \Bbb R$ reaches its maximum and minimum on $K$

Any two norms in a finite dimensional vector space are [[charleshoots.net/II. Teaching/Mathematics/Continuity on Metric Spaces#Lipschitz Continuity\|equivalent]].

With this we can get, the most general form of Heine-Borel. Let $V$ be a finite dimensional vector space over $\Bbb R$, then $K$ is a compact subset of $V$ iff $K$ is closed and bounded.

We get that If $V$ is a finite dimensional normed vector space over $\Bbb R$, and $W$ is a normed vector space over $\Bbb R$, then if $L :V \to W$ is a linear map is Lipschitz continuous.

**Def:** A subset $A$ of subset of a metric space $X$. We say that $x_0\in A$ is a *local minimum* of $g:X \to \overline{\Bbb R}$ if there exists a $\delta>0$ such that $$g(x_0) \le g(x) \qquad \forall x \in A \cap B_X(x_0, \delta)$$We say that $x_0\in A$ is a *local maximum* of $g:X \to \overline{\Bbb R}$ if there exists a $\delta>0$ such that $$g(x_0) \ge g(x) \qquad \forall x \in A \cap B_X(x_0, \delta)$$