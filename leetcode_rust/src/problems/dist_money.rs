pub struct Solution;

impl Solution {
    pub fn dist_money(money: i32, children: i32) -> i32 {
        let extra = money - children; // give everyone at least one dollar

        if extra < 0 {
            // money not enough!
            return -1;
        }

        let eight_cout = extra / 7;
        let remainder = extra % 7;

        if extra == 0 {
            return 0;
        } else if extra <= children {
            return eight_cout;
        } else {
            if eight_cout == 0 {
                return 0;
            } else if eight_cout == children - 1 && remainder == 3 {
                return eight_cout - 1;
            } else if eight_cout < children {
                return eight_cout;
            } else if eight_cout == children && remainder == 0 {
                return eight_cout;
            } else if eight_cout == children && remainder != 0 {
                return eight_cout - 1;
            } else if eight_cout > children {
                return children - 1;
            }
        }

        -1
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn basic_cases() {
        assert_eq!(Solution::dist_money(20, 3), 1);
        assert_eq!(Solution::dist_money(16, 2), 2);
        assert_eq!(Solution::dist_money(8, 2), 0);
        assert_eq!(Solution::dist_money(2, 2), 0);
        assert_eq!(Solution::dist_money(3, 2), 0);
    }

    #[test]
    fn impossible_cases() {
        assert_eq!(Solution::dist_money(1, 2), -1);
    }

    #[test]
    fn all_children_get_eight() {
        assert_eq!(Solution::dist_money(16, 2), 2);
        assert_eq!(Solution::dist_money(24, 3), 3);
        assert_eq!(Solution::dist_money(32, 4), 4);
    }

    #[test]
    fn extra_money_after_eights() {
        assert_eq!(Solution::dist_money(17, 2), 1);
        assert_eq!(Solution::dist_money(25, 3), 2);
        assert_eq!(Solution::dist_money(26, 3), 2);
    }

    #[test]
    fn forbidden_four_dollars() {
        assert_eq!(Solution::dist_money(12, 2), 0);
        assert_eq!(Solution::dist_money(19, 3), 1);
        assert_eq!(Solution::dist_money(20, 3), 1);
    }
}
