public class Permutation
{
    public static void main(String[])
    {
        String str = "123";
        int n = str.length();
        Permutation permutation = new Permutation();
        permutation.permute(str, 0, n-1);
    }


findAllPermutations('123')


//['123','231','321','213','312',]
