---
{"dg-publish":true,"tags":["teaching","physics","rotationalmechanics"],"permalink":"/II. Teaching/Physics/Rotational Mechanics/Rotational Kinematics/","dgPassFrontmatter":true,"noteIcon":"1","created":"2026-02-11T19:13:57.422-10:00","updated":"2026-02-11T19:13:57.422-10:00","dg-path":"II. Teaching/Physics/Rotational Mechanics/Rotational Kinematics.md"}
---



>[!summary]
Rotational motion is a type of motion where an object experiences angular displacement, velocity and/or acceleration
>
We can break the motion into linear and tangential motion.
>
**Key equations:**
>
General equations:
$\Delta \theta = \omega \Delta t$
$\Delta \omega = \alpha \Delta t$

>[!info]+ Read Time
**⏱ 2 mins**

# Definition 
Rotational kinematics describes the motion of angular [displacement](Angular%20Displacement.md), [velocity](Angular%20Velocity.md) and [acceleration](Angular%20Acceleration.md). This is used to describe an unknown function (like angular displacement), knowing one more of its [[Derivative\|derivatives]] (angular velocity/acceleration). Rotational kinematics assumes the velocity or acceleration is always constant from point a to b or can be accurately described as the average of that function.

## Deriving Rotational Kinematics
> [!warning] Assumptions
Assume the [angular velocity ](Angular%20Velocity.md) and [acceleration](Angular%20Acceleration.md) are always constant from time $t_{1}$ to $t_{2}$. As well assume the following:
> - [Angular velocity](Angular%20Velocity.md) is defined as $\omega = \frac{d\theta}{dt}$
> - [Angular acceleration](Angular%20Acceleration.md) is defined as $\alpha=\frac{d\omega}{dt}$
> - [Angular displacement](Angular%20Displacement.md) ($\theta$) is the area under [angular velocity](Angular%20Velocity.md) 
> - [Angular velocity](Angular%20Velocity.md) is the area under [angular acceleration](Angular%20Acceleration.md)

If the goal was to find the change in displacement know angular velocity over $t_{1},t_{2}$

$$
\begin{array}{c}  
dt(\frac{d\theta}{dt} = \omega)  \\
d\theta = \omega dt  \\
\int_{\theta (t_{1})}^{\theta (t_{2})}{d\theta} = \int_{t_{1}}^{t_{2}}\omega dt \\
\Delta \theta = \omega  \int_{t_{1}}^{t_{2}} dt  \\
\Delta \theta = \omega  \Delta t
\end{array}
$$

If the goal was to find the change in angular velocity knowing angular acceleration over 
$t_{1},t_{2}$ 

$$
\begin{array}{c}
dt \left( \frac{d\omega}{dt} = \alpha  \right) \\
\int_{\omega(t_{1})}^{\omega (t_{2})} d\omega =\int_{t_{1}}^{t_{2}} \alpha dt  \\
\Delta \omega = \alpha \Delta t
\end{array}
$$


---

> 📂 Want to see more structured notes like these?  
> Help grow the project by [starring Math & Matter on GitHub](https://github.com/rajeevphysics/Obsidian-MathMatter).

---



[^1]: Taken from R. Epp Lecture notes.
