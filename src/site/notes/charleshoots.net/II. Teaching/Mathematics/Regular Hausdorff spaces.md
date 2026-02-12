---
{"tags":["Topology","teaching","mathematics"],"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Regular Hausdorff spaces","permalink":"/II. Teaching/Mathematics/Regular Hausdorff spaces/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-11T19:13:57.410-10:00","updated":"2026-02-11T20:25:20.791-10:00"}
---



Subjects: [[/II. Teaching/Mathematics/Topology\|Topology]]
Links: [[/II. Teaching/Mathematics/Hausdorff Spaces\|Hausdorff Spaces]], [[/II. Teaching/Mathematics/Fréchet Spaces\|Fréchet Spaces]], [[/II. Teaching/Mathematics/Kolmogorov Spaces\|Kolmogorov Spaces]], [[/II. Teaching/Mathematics/Topological Spaces\|Topological Spaces]]

**Def:** Let $X$ be a topological space we say that $X$ is regular space, if given any closed set $F$ and any point $x\in X \setminus F$, there exists neighbourhood $U$ of $x$ and a neighbourhood $V$ of $F$ that are disjoint.

**Def:** Let $X$ be a topological space we say that $X$ is $T_3$ space if $X$ is $T_1$ space and a regular space.

**Obs:** Every $T_3$ space is $T_2$, $T_1$, and $T_0$. 

**Prop:** Let $(X, \tau)$ be a topological space.
- $X$ is regular. 
- For any point $x\in X$ and any open $U$ such that $x \in U$, there's a $V \in \tau$ such that $x \in V \subseteq \text{cl}(V) \subseteq U$.
- For each $x \in X$ has a local base of neighbourhoods formed by closed subsets.
- For every closed set $F \subseteq X$, there's a family $\mathcal B \subseteq \tau$ such that $F\subseteq U$ for each $U \in\mathcal B$ and $F = \bigcap \text{cl}(\mathcal B)$ 

**Prop:** Both regularity and $T_3$ are topological properties, meaning that are invariant under homeomorphisms.

**Prop:** Let $X$ be a regular space. If $\cal U$ is an open cover of $X$, then there exists an open cover $\cal W$ such that $\overline{\cal W}$ is refinement of $\cal U$. 

**Prop:** $T_3$ and regularity are hereditary properties. 

**Th:** If $\{(X_\alpha, \tau_\alpha) \mid \alpha < \kappa\}$ is a family of nonempty $T_3$ spaces, then the product $\prod_{\alpha < \kappa} X_\alpha$ is a $T_3$ space iff for each $\alpha < \kappa$, $X_\alpha$ is a $T_3$ space. 

**Prop:** If $\{(X_\alpha, \tau_\alpha) \mid \alpha < \kappa\}$ is a family of nonempty $T_3$ spaces, then the sum $\bigoplus_{\alpha < \kappa} X_\alpha$ is a $T_3$ space iff for each $\alpha < \kappa$, $X_\alpha$ is a $T_3$ space. 

**Prop:** Let $X$ be a regular $T_0$ space, then it is a $T_2$ space. 