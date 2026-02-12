---
{"tags":["RealAnalysis","teaching","mathematics"],"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Compact Sets in R.md","permalink":"/ii-teaching/mathematics/compact-sets-in-r/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-11T19:13:57.389-10:00","updated":"2026-02-11T19:13:57.389-10:00"}
---



Subjects: [[charleshoots.net/II. Teaching/Mathematics/Real Analysis\|Real Analysis]]
Links: [Open and Closed Sets in R](Open%20and%20Closed%20Sets%20in%20R.md)

***Def:*** A set $K \subseteq \Bbb{R}$ is ********sequentially compact******** if for every sequence in $K$ has a subsequence that converges to a limit that is also in $K$.

***Def:******* A set $A \subseteq \Bbb{R}$ is ********bounded******** if there’s $M>0$ such that $|a| \le M$ for all $a \in A$

### Bolzano-Weiestrass Theorem
Let $A\subseteq \Bbb{R}$ be a infinite bounded set, then has at least a limit point, i.e. $A' \ne \varnothing$. This is a reformulation of the [[charleshoots.net/II. Teaching/Mathematics/Properties of Limits of Sequences in R#Bolzano-Weierstrass Theorem\|Bolzano-Weiestrass theorem for sequences]].

**Th (Characterization of Sequential Compactness in $\Bbb{R}$):** A set $K \subseteq \Bbb{R}$ is sequentially compact iff it is closed and bounded.

## Open Covers
**Def:** Let $A \subseteq \Bbb{R}$. An *[[charleshoots.net/II. Teaching/Mathematics/Topological Covers\|open cover]]* for $A$ is a (possibly infinite) collection of open sets ${\{U_\lambda \mid \lambda \in \Lambda\}}$ whose union contains the set $A$; that is $A \subseteq \bigcup_{\lambda\in \Lambda} U_\lambda$. Given an open cover for $A$, a *[[charleshoots.net/II. Teaching/Mathematics/Topological Covers\|finite subcover]]* is a finite subcollection of open sets from the original open cover whose union still manages to completely contain $A$.

********Def:******** A set $K \subseteq \Bbb{R}$ is called [compact](Compactness.md) if for every open cover there’s a finite subcover

### Heine-Borel Theorem
Let $K \subseteq \Bbb{R}$. All of the following statements are equivalent:
- $K$ is sequentially compact
- $K$ is compact
- $K$ is closed and bounded

### Nested Compact Set Property
Let $(K_n)_{n \in \Bbb{N}}$ be a nested sequence of nonempty compact sets, then

$$ \bigcap_{n \in \Bbb{N}} K_n \ne \varnothing $$
This is equivalent to the [[charleshoots.net/II. Teaching/Mathematics/Complete Metric Spaces\|completeness of R]]

**Def**: A system of sets $S$ has the *finite intersection property* if every nonempty finite subsystem of $S$ has nonempty intersection.

Any system of compact intervals in $\Bbb R$ with the finite intersection property has nonempty intersection

Any system of compact sets in $\Bbb R$ with the finite intersection property has nonempty intersection