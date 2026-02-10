---
{"tags":["NumberTheory","teaching","mathematics"],"dg-publish":true,"dg-path":"II. Teaching/Mathematics/Fermat's Little Theorem.md","permalink":"/ii-teaching/mathematics/fermat-s-little-theorem/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-08T18:42:15.000-10:00","updated":"2026-02-09T15:52:41.746-10:00"}
---


Subjects: [[charleshoots.net/II. Teaching/Mathematics/Elementary Number Theory\|Elementary Number Theory]]
Links: [[charleshoots.net/II. Teaching/Mathematics/Integers modulo n\|Integers modulo n]], [[charleshoots.net/II. Teaching/Mathematics/Prime Numbers\|Prime Numbers]]

**Lemma:** Let $p$ be a prime an $0 \le k <p$, then $$ {p\choose k} \equiv 0 \pmod p $$
### Fermat’s Little Theorem

Let $p$ be a prime number, and $\gcd(a, p) = 1$, then

$$ a^{p-1} \equiv 1 \pmod p $$

**Cor:** Let $p$ be a prime number, then for any $a$

$$ a^{p} \equiv a \pmod p $$

**Lemma:** If $p$ and $q$ are distinct primes with $a^p \equiv a \pmod q$ and $a^q\equiv a \pmod p$, then
$$ a^{pq} \equiv a \pmod p $$

**************Def:************** If $n$ is a composite number is called *pseudoprime* if $n \mid 2^n-2$. This is important because a Chinese mathematician thought that $n$ is prime iff $n \mid 2^n-2$.

********Th:******** If $n$ is an odd pseudoprime, then $M_n = 2^n-1$ is a larger one.

**Def:** Expanding the definition of pseudoprimes, a composite number $n$ for which ${a^n \equiv a \pmod n}$ is called a *pseudoprime to the base $a$*, when $a = 2$, it is just called a pseudoprime.

**Def:** If $n$ is a pseudoprime for all to every base $a$, meaning $a^n \equiv a\pmod n$, are called an *absolute pseudoprime* or a *Carmichael number.*

********Th:******** Let $n$ be a composite square-free integer, say $n = p_1p_2 \cdots p_r$, where $p_i$ distinct primes. If $p_i-1 \mid n-1$, for $i =1, 2, \dots, r$, then $n$ is an absolute pseudoprime.