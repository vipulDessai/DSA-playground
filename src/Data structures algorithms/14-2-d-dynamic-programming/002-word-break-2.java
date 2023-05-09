public List<String> wordBreak(String s, Set<String> wordDict) {
    List<Integer>[] starts = new List[s.length() + 1]; // valid start positions
    starts[0] = new ArrayList<Integer>();
    
    int maxLen = getMaxLen(wordDict);
    for (int i = 1; i <= s.length(); i++) {
        for (int j = i - 1; j >= i - maxLen && j >= 0; j--) {
            if (starts[j] == null) continue;
            String word = s.substring(j, i);
            if (wordDict.contains(word)) {
                if (starts[i] == null) {
                    starts[i] = new ArrayList<Integer>();
                }
                starts[i].add(j);
            }
        }
    }
    
    List<String> rst = new ArrayList<>();
    if (starts[s.length()] == null) {
        return rst;
    }
    
    dfs(rst, "", s, starts, s.length());
    return rst;
}


private void dfs(List<String> rst, String path, String s, List<Integer>[] starts, int end) {
    if (end == 0) {
        rst.add(path.substring(1));
        return;
    }
    
    for (Integer start: starts[end]) {
        String word = s.substring(start, end);
        dfs(rst, " " + word + path, s, starts, start);
    }
}

private int getMaxLen(Set<String> wordDict) {
    int max = 0;
    for (String s : wordDict) {
        max = Math.max(max, s.length());
    }
    return max;
}