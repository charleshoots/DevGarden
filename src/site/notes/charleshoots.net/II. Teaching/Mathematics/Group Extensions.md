---
{"tags":["GroupTheory"],"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Group Extensions.md","permalink":"/ii-teaching/mathematics/group-extensions/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-08T18:42:15.000-10:00","updated":"2026-02-08T18:42:15.000-10:00"}
---


Subjects: [[charleshoots.net/II. Teaching/Mathematics/Group Theory\|Group Theory]]
Links: [[charleshoots.net/II. Teaching/Mathematics/Groups\|Groups]], [[charleshoots.net/II. Teaching/Mathematics/Normal Subgroups and Quotient Groups\|Normal Subgroups and Quotient Groups]], [[charleshoots.net/II. Teaching/Mathematics/Group Homomorphisms and Isomorphisms\|Group Homomorphisms and Isomorphisms]]

**Def:** A group $G$ is said to be the extension of the group $N$ by a group $M$ if $G$ has a normal subgroup $H \trianglelefteq G$ isomorphic it $N$ such that the quotient $G/H$ is isomorphic to $M$. It is common to use this notation: 
```tikz
\usepackage{tikz-cd}
\usepackage{amsfonts, amsmath, amssymb}

\begin{document}
\begin{tikzcd}[row sep=2cm, column sep=2cm]
     1\arrow[r] & H\arrow[r, hook]\arrow[d, "\simeq"] & G\arrow[r]& G/H\arrow[r]\arrow[d, "\simeq"] & 1 \\
     & N && M &
   \end{tikzcd}
\end{document}
```

This means that the class $\sf Sol$ of solvable groups is closed under subgroups, quotients and extensions, but $\sf Ab$ is closed under subgroups and quotients, but not extensions, since $S_3$ has as a normal subgroup $A_3$ which is cyclic, and $S_3/A_3$ is of order $2$, so it is abelian, but $S_3$ is not abelian. 